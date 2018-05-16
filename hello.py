## compute_input.py

import sys, json, numpy as np

#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    # Since our input would only be having one line, 
    # parse our JSON data from that
    return json.loads(lines[0])

def main():
    #get our data as an array from read_in()
    lines = read_in()

    #create a numpy array
    np_lines = np.array(lines)

    #use numpys sum method to find sum of all elements in the array
    lines_sum = np.sum(np_lines)
    # num = 0
    # #return the sum to the output stream
    # for value in lines_sum.values():
    #     num += float(value)

    # data = {
    #     "mot": "1",
    #     "hai": "2",
    #     "ba" : "3",
    #     "bon": "4",
    #     "nam": "5",
    #     "sau": "6",
    #     "bay": "7",
    #     "tam": "8",
    #     "chin": "9"
    # }
    print (lines_sum)

#start process
if __name__ == '__main__':
    main()