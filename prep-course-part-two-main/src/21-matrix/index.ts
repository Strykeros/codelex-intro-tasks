/**
 * Matrix
 * Given a string representing a matrix of numbers, return the rows and columns of that matrix.
 *
 * So given a string with embedded newlines like:
 *
 *     9 8 7
 *     5 3 2
 *     6 6 7
 *
 * representing this matrix:
 *
 *         1  2  3
 *       |---------
 *     1 | 9  8  7
 *     2 | 5  3  2
 *     3 | 6  6  7
 *
 * your code should be able to spit out:
 *
 * A list of the rows, reading each row left-to-right while moving top-to-bottom across the rows,
 * A list of the columns, reading each column top-to-bottom while moving from left-to-right.
 *
 * The rows for our example matrix:
 *
 *     9, 8, 7
 *     5, 3, 2
 *     6, 6, 7
 *
 * And its columns:
 *
 *     9, 5, 6
 *     8, 3, 6
 *     7, 2, 7
 */

class Matrix {
  constructor(private matrix: string) {}

  get rows() {
    
    // split string into array from "\n"
    const rows: string[] = this.matrix.split("\n"); 
    
    // Convert each row to an integer array
    const outputArray: number[][] = rows.map(row => {
      const rowValues = row.split(" "); 
      return rowValues.map(value => parseInt(value));
    });
    

    return outputArray;
  }

  get columns() {

    // split string into array from "\n"
    const lines: string[] = this.matrix.split("\n");
    const convertedNumberArr: number[][] = [];
  
    // loop through the main array, convert each array value into sub-array,
    // convert sub-array values to integers and return them.
    for (let i = 0; i < lines.length; i++) {
      const valuesArray: string[] = lines[i].trim().split(" ");
  
      for (let j = 0; j < valuesArray.length; j++) {
        const value: string = valuesArray[j];
        const numValue: number = parseInt(value);
  
        if (!convertedNumberArr[j]) {
          convertedNumberArr[j] = [];
        }
        convertedNumberArr[j].push(numValue);
        
      }
    }
  
    return convertedNumberArr;
  }
  

}

export { Matrix };
