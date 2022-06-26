// input: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

//autput: [1, 2, 3, 6, 9, 8, 7, 4, 5]


const SquareMatrix = (a) => {
    let top = 0;
    let down = a.length - 1;
    let left = 0;
    let bottom = a.length - 1;
    let right = a.length - 1;
    let dir = 0;
    let SquareArray = []

    while (top <= bottom && left <= right) {
        if (dir === 0) {
            for (i = left; i <= right; i++) {
                SquareArray.push(a[top][i])
            }
            top += 1
        }
        else if (dir === 1) {
            for (i = top; i <= down; i++) {
                SquareArray.push(a[i][right])
            }
            right -= 1
        } else if (dir === 2) {
            for (i = right; i >= left; i--) {
                SquareArray.push(a[down][i])
                console.log("dir2", a[down][i])
            }
            down -= 1
        }
        else if (dir === 3) {
            for (i = down; i <= top; i++) {
                SquareArray.push(a[i][left])
            }
            left += 1
        }
        dir = (dir + 1) % 4
    }
    return SquareArray
}

console.log(SquareMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))