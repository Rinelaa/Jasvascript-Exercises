function countMoves(array) {
    const m = array.length;          
    const n = array[0].length;  
    let diffColumn = new Array(m).fill(true); 
    let currentColumn = new Array(m).fill(false); 
    let move = 0; 

    for (let j = 1; j < n; j++) {   
        let checkMove = false; 

        for (let i = 0; i < m; i++) {  
            currentColumn[i] = false; 

            if (i - 1 >= 0 && diffColumn[i - 1] && array[i - 1][j - 1] < array[i][j]) {
                currentColumn[i] = true;
                checkMove = true;
            }
            
            if (i + 1 < m && diffColumn[i + 1] && array[i + 1][j - 1] < array[i][j]) {
                currentColumn[i] = true;
                checkMove = true;
            }
            
            if (diffColumn[i] && array[i][j - 1] < array[i][j]) {
                currentColumn[i] = true;
                checkMove = true;
            }
        }

        const temp = diffColumn;
        diffColumn = currentColumn; 
        currentColumn = temp; 

        if (!checkMove) break;
        move++;
    }
    return move;
}

const array1 = [[2, 4, 3, 5], [5, 4, 9, 3], [3, 4, 2, 11], [10, 9, 13, 15]];
const result1 = countMoves(array1);
console.log("Input 1:", array1);
console.log("Output 1:", result1); 

const array2 = [[3, 2, 4], [2, 1, 9], [1, 1, 7]];
const result2 = countMoves(array2);
console.log("Input 2:", array2);
console.log("Output 2:", result2); 