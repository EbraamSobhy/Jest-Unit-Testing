# Jest Cheatsheet

# Jest Cheatsheet

## 📦 Install Jest

```bash
npm install --save-dev jest

```

Add to `package.json`:

```json
"scripts": {
  "test": "jest"
}

```

---

## 🧪 Basic Test Structure

```jsx
test('description', () => {
  expect(value).toBe(expected);
});

```

Or using `it`:

```jsx
it('does something', () => {
  expect(2 + 2).toBe(4);
});

```

---

## 🧩 Matchers

### ✔️ Common Matchers

```jsx
expect(value).toBe(10);           // strict equality
expect(value).toEqual(obj);       // deep equality
expect(value).not.toBe(5);        // negation

```

### 🔢 Numbers

```jsx
expect(value).toBeGreaterThan(5);
expect(value).toBeLessThan(10);
expect(value).toBeCloseTo(0.1 + 0.2);

```

### 🔡 Strings

```jsx
expect('Hello').toMatch(/ell/);

```

### 📚 Arrays / Iterables

```jsx
expect([1, 2, 3]).toContain(2);

```

### 🛑 Exceptions

```jsx
expect(() => func()).toThrow();
expect(() => func()).toThrow('error message');

```

---

## ⏳ Async Tests

### ✔️ Async/Await

```jsx
test('async example', async () => {
  const data = await fetchData();
  expect(data).toBe('done');
});

```

### ✔️ Promises

```jsx
return expect(fetchData()).resolves.toBe('done');
return expect(fetchData()).rejects.toThrow();

```

---

## 🧱 Test Setup

### 🧵 Hooks

```jsx
beforeAll(() => {});     // runs once before all tests
afterAll(() => {});      // runs once after all tests
beforeEach(() => {});    // runs before every test
afterEach(() => {});     // runs after every test

```

---

## 🧪 Mocking

### 🔧 Mock Functions

```jsx
const mockFn = jest.fn();
mockFn('hello');
expect(mockFn).toHaveBeenCalled();
expect(mockFn).toHaveBeenCalledWith('hello');

```

### 🔁 Mock Return Values

```jsx
const mockFn = jest.fn()
  .mockReturnValue(10)
  .mockReturnValueOnce(20);

mockFn(); // 20
mockFn(); // 10

```

### 📦 Mock Modules

```jsx
jest.mock('./utils');    // mocks the whole module

```

### ⚙️ Mock Implementation

```jsx
const mockFn = jest.fn().mockImplementation(() => 42);

```

---

## 🗂️ Mock Timers

```jsx
jest.useFakeTimers();
jest.advanceTimersByTime(3000);
jest.runAllTimers();

```

---

## 🖼️ Snapshot Testing

```jsx
expect(component).toMatchSnapshot();

```

---

## 🌐 ESM Support

In `package.json`:

```json
"type": "module"

```

Run:

```bash
node --experimental-vm-modules node_modules/jest/bin/jest.js

```

---

## 🏃 Run Specific Tests

```bash
jest testName
jest -t "description"
jest path/to/file.test.js

```

---

## 📈 Coverage

```bash
jest --coverage

```
