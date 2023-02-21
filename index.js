const n1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
const n2 = [
    [11, 12, 13],
    [14, 15, 16],
    [17, 18, 19]
]


const calculateProduct = (x) => {
    let product = 1;
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < x[i].length; j++) {
            product *= x[i][j]
        }
    }
    return product
}

let a = calculateProduct(n1)
let b = calculateProduct(n2)
const c = a * b

console.log('Product of C = A * B: ', c);