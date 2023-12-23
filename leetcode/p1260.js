/**
 * 2023 Dec 20
 * https://leetcode.com/problems/shift-2d-grid/
 * Shift 2D Grid
 */

var shiftGrid = function(grid, k) {
    let rows = grid.length;
    let columns = grid[0].length;
    let matrixLength = rows * columns;
    //console.log("grid", grid, "k", k, "rows", rows, "columns", columns)
    const matrixShifted = Array.from(Array(rows), () => Array(columns));
    const convertIndexToMatrix = (index2d) => {
        return [Math.floor(index2d / columns), index2d % columns]
    }
    // let's see if it lets us get away with non-simultaneous assignment
    for (i = 0; i < matrixLength; i++) {
        let shiftedIndex = i+k;
        while (shiftedIndex >= matrixLength) {
            shiftedIndex -= matrixLength;
        }
        //console.log("i", i, "shiftI", shiftedIndex);
        const [yIndex, xIndex] = convertIndexToMatrix(i)
        const [yIndexShifted, xIndexShifted] = convertIndexToMatrix(shiftedIndex)
        //console.log("yIndex", yIndex, "xIndex", xIndex);
        //console.log("yIndexShifted", yIndexShifted, "xIndexShifted", xIndexShifted);
        matrixShifted[yIndexShifted][xIndexShifted] = grid[yIndex][xIndex]
    }
    return matrixShifted;
};