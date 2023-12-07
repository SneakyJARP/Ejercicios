const people= [
    { name: 'Mario', age: 32 },
    { name: 'Luigi', age: 28 },
    { name: 'Peach', age: 29 },
    { name: 'Toad', age: 35 }
  ];

  function personaMayor(arr){
    const arrOrdenada = arr.sort((a,b)=> b.age - a.age);
    const personaMayor = arrOrdenada[0];
    return personaMayor

  }

  console.log(personaMayor(people))


  