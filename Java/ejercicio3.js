




const sumFunc=(a,b)=>{
    let sum = (a+b);
    return sum
}
const substractFunc=(a,b)=>{
    let substract = (a-b);
    return substract
}
const multiplyFunc=(a,b)=>{
    let multiply = (a*b);
    return multiply
}
const divideFunc=(a,b)=>{
    let divide = (a/b);
    return divide
}

value=divideFunc((substractFunc((multiplyFunc(sumFunc(2,4),sumFunc(5,2))),2)),5);

const logFunc=(value)=>{
    // let value =divideFunc((substractFunc((multiplyFunc(sumFunc(2,4),sumFunc(5,2))),2)),5)
    return value
}


// console.log(((2 + 4) * (5 + 2) - 2) / 5)
// console.log(multiplyFunc(sumFunc(2,4),sumFunc(5,2)))
// console.log(substractFunc((multiplyFunc(sumFunc(2,4),sumFunc(5,2))),2))
console.log(divideFunc((substractFunc((multiplyFunc(sumFunc(2,4),sumFunc(5,2))),2)),5))

