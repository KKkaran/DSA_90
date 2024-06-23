const countTo10 = (input) => {
    console.log(input)
    if (input === 1) return 'We are done!'
    countTo10(input-=1)
}


// countTo10(10)


const powerOf2 = (n) => {
    if (n === 0) return 1

    power = powerOf2(n - 1)
    return power * 2
}

console.log(powerOf2(0))