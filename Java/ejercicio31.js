//In this exercises something goes wrong. Even though we have created a copy of person1, modifying the property city of person2 also changes the value for person1. This happens because we have created a shallow copy. How can we fix the code in order to be able modify the values of person2 without changing the values of person1?


function copy(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    if (Array.isArray(obj)) {
      return obj.map(copy);
    }
  
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [key, copy(value)])
    );
  }
  
  const person1 = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25,
    address: {
      state: 'Italy',
      city: 'Rome',
      street: 'Via Romano, 12'
    }
  };
  
  const person2 = copy(person1);
  person2.address.city = 'Milan';
  
  console.log(person1);
  console.log(person2);