// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
export { }

let sizeOfMatrix: number = 6;

let matrix:number[][] = createMatrix(sizeOfMatrix);

matrix.forEach(element => console.log(element));

function createMatrix(sizeOfMatrix:number) :number[][] {
    let matrix:number[][] = [];
    for (let i: number = 0; i < sizeOfMatrix; i++) {
        let matrixRow: number[] = [];
        for (let j: number = 0; j < sizeOfMatrix; j++) {
            if (i + j === sizeOfMatrix - 1) {
                matrixRow.push(1);
            }
            else {
                matrixRow.push(0);
            }
        }
        matrix.push(matrixRow);
    }
    return matrix;
}

