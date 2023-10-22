let num;

function multiplyByTwo(number) {
  return function inner(input) {
    return input * number;
  };
};

const result = multiplyByTwo(4)(2);
console.log(result);