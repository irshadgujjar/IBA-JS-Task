

const sumEvens = (count) => {

    let sum = 0;
    for (let i = 0; i < count.length; i++) {
        if (count[i] % 2 === 0) {
            sum = sum + count[i];
        }
    }
    return sum;
}

let count = [1, 3, 4, 5, 6, 2, 8, 2, 1];

let res = sumEvens(count)
console.log(res)
