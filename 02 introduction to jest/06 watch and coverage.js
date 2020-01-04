//index.js
const cities = ['Ciudad de Mexico', 'Bogota', 'Lima', 'Buenos aires', 'Guadalajara'];

const reverseString2 = str => {
    return new Promise((resolve,reject) => {
      if(!str){
          reject(Error('Error'));
      }
      resolve(str.split("").reverse().join());
    });
}

const randomString = () => {
    const string = cities[Match.floor(Math.random() * cities.lenght)];
    return string;
}

module.exports = randomString;

//__test__
//  index.test.js

const randomString = require('../index');

test('probar la funcionalidad', () => {
  expect(typeof (randomString())).toBe('string');
  
});

//console:
//   npm install jest -g
//   jest src/__test__/index.test.js

describe('Probar funcionalidades de randomStrings', () => {
    
    const randomString = require('../index');

    test('probar la funcionalidad', () => {
      expect(typeof (randomString())).toBe('string');
      
    });  

    test('comprobar que no existe una ciudad', () => {
       expect(randomStrings()).not.toMatch(/Cordoba/);
    });
});

//package.json
"scripts": {
    "test": "jest",
    "test:watch": "jest --watch"
}

//console:
// jest --coverage

// it will show a report in console.

//src/
//  coverage/
//    ... index.html 
// that file open the report about the coverage of the proyect.



