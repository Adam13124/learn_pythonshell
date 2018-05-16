//start.js
var spawn   = require('child_process').spawn;
const py    = spawn('python', ['hello.py']);
const  data = {
  mot: '1',
  hai: '2',
  ba: '3',
  bon: '4',
  nam: '5',
  sau: '6',
  bay: '7',
  tam: '8',
  chin: '9'
};
var dataString = '';
/*Here we are saying that every time our node application receives
 data from the python process output stream(on 'data'), we want to convert that 
 received data into a string and append it to the overall dataString.*/
py.stdout.on('data', function(data){
  data1 = (data.toString()).replace(/[']/g, "\"");
  console.log((JSON.parse(data1)).mot);
});

/*Once the stream is done (on 'end') we want to simply log 
the received data to the console.*/
py.stdout.on('end', function(){
  console.log('Sum of numbers=',dataString);
});

/*We have to stringify the data first otherwise 
our python process wont recognize it*/
py.stdin.write(JSON.stringify(data));

py.stdin.end();
// console.log(JSON.stringify(data));