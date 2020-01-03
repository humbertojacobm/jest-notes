const text = "Hola mundo";
const fruits = ['manzana','melon','banana'];


test('Debe contener un texto', () => {
    expect(text).toMatch(/Mundo/);
});

test('Do we have banana?', () => {
  expect(fruits).toContain('banana');
});

test('Greater than', () => {
    expect(10).toBeGreaterThan(9);
});

test('Truthy', () => {
    expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""));
}

test('Testing a callback', () => {
  reverseString('Hola', (str) => {
     expect(str).toBe('aloH');
  });
});