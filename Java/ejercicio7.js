function printName() {
    const helloName = "Hello John";
  
    function inner() {
      setTimeout(() => {
        console.log(helloName);
      }, 1000);
    }
  
    return inner;
  }
  
  const sayHello = printName();
  
setTimeout(() => {
    sayHello();
  }, 1000);
  