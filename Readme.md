# Steps to Make Unit Testing with Jest

## 1️⃣ Initialize your project

``` bash
mkdir jest-demo
cd jest-demo
npm init -y
```

## 2️⃣ Install Jest

``` bash
npm install --save-dev jest
```

## 3️⃣ Configure Jest in `package.json`

``` json
{
  "scripts": {
    "test": "jest"
  }
}
```

Run tests:

``` bash
npm test
```

## 4️⃣ Create the code you want to test

**sum.js**

``` js
function sum(a, b) {
  return a + b;
}

module.exports = sum;
```

## 5️⃣ Create a test file

**sum.test.js**

``` js
const sum = require('./sum');

test('adds 2 + 3 to equal 5', () => {
  expect(sum(2, 3)).toBe(5);
});
```

## 6️⃣ Run the test

``` bash
npm test
```

## 7️⃣ Jest basics

### test / it

``` js
test('description', () => {});
it('description', () => {});
```

### expect

``` js
expect(value).toBe(5);
expect(value).toEqual({ a: 1 });
expect(value).toBeTruthy();
expect(value).toBeFalsy();
```

## 8️⃣ Group tests

``` js
describe('sum function', () => {
  test('adds positive numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
  });
});
```

## 9️⃣ Async tests

``` js
test('async test', async () => {
  const data = await fetchData();
  expect(data).toBe('ok');
});
```

## 🔟 Mock functions

``` js
const mockFn = jest.fn();
mockFn(5);

expect(mockFn).toHaveBeenCalled();
expect(mockFn).toHaveBeenCalledWith(5);
```

## 1️⃣1️⃣ Folder structure

    project/
    │── src/
    │   └── sum.js
    │── tests/
    │   └── sum.test.js
    │── package.json

## 1️⃣2️⃣ Useful commands

``` bash
npm test -- --watch
npm test -- --coverage
```

## 1️⃣3️⃣ Best practices

-   One test file per module
-   Test logic, not UI
-   Clear test names
-   Isolated tests
-   Mock APIs & databases
