//

const reverseString2 = str => {
    return new Promise((resolve,reject) => {
      if(!str){
          reject(Error('Error'));
      }
      resolve(str.split("").reverse().join());
    });
}

test('Probar una promesa', () => {
    return reverseString2('Hola')
       .then(string => {
           expect(string).toBe('aloH');
       });
})

test ('probar async/await', async () => {
  const string = await reverseString2('hola');
  expect(string).toBe('aloH');
});

afterEach(() => console.log('Despues de cada prueba'));
afterAll(() => console.log('Despues de todas las pruebas'));

beforeEach(() => console.log('antes de cada prueba'));
beforeAll(() => console.log('antes de todas las pruebas'));