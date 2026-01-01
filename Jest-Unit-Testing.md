# Jest Unit Testing

```bash
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node @types/jest
npm init jest@latest
```

---

> ? Would you like to use Jest when running "test" script in "package.json"?
> 
> 
> 👉 **Y** (Yes)
> 

This adds `"test": "jest"` to your `package.json` scripts.

---

> ? Would you like to use Typescript for the configuration file?
> 
> 
> 👉 Choose **No** (unless your project uses TypeScript)
> 

If your project is in **JavaScript**, choose **No** — Jest will generate a `jest.config.js`.

If your project uses **TypeScript**, choose **Yes** to create `jest.config.ts`.

---

> ? Choose the test environment that will be used for testing
> 
> 
> 👉 Select **jsdom** (important for React/Next.js apps)
> 

Because Next.js runs in a browser-like environment, `jsdom` simulates the DOM.

---

> ? Do you want Jest to add coverage reports?
> 
> 
> 👉 Optional
> 
> You can choose **Yes** if you want Jest to track test coverage automatically.
> 

---

> ? Which provider should be used to instrument code for coverage?
> 
> 
> 👉 Choose **v8**
> 

It’s the recommended and modern option.

---

> ? Automatically clear mock calls, instances, contexts and results before every test?
> 
> 
> 👉 **Yes**
> 

This keeps each test isolated and clean.

---

After finishing, it will create a **`jest.config.js`** file for you —

you can then modify it slightly to integrate smoothly with **Next.js** 👇

### Modify the Generated `jest.config.js`

Replace its content with this (Next.js–ready version):

```jsx
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
};

module.exports = createJestConfig(customJestConfig);

```

Then create **`jest.setup.js`** in your root folder:

```jsx
import '@testing-library/jest-dom';
```

---

## Step 4: Add a Sample Component

Example: `app/components/Hello.js`

```jsx
export default function Hello({ name }) {
  return <h1>Hello, {name}!</h1>
}

```

---

## Step 5: Write a Test

Create a folder `__tests__` in your project root.

Inside it, create `Hello.test.js`:

```jsx
import { render, screen } from '@testing-library/react'
import Hello from '@/app/components/Hello'

describe('Hello Component', () => {
  it('renders with name prop', () => {
    render(<Hello name="Ebraam" />)
    expect(screen.getByText('Hello, Ebraam!')).toBeInTheDocument()
  })
})

```

---

Project Structure

```bash
app/
 ├─ page.js
 ├─ about/
 │   └─ page.js
 └─ components/
     └─ Hello.js
__tests__/
 ├─ home.test.js
 └─ about.test.js
jest.config.js
jest.setup.js

```

---

Now you can run:

```bash
npm test
```

or

```bash
npx jest
```

or

```bash
sudo npm install -g jest
jest
```

---

### Jest Standard Syntax Overview

```jsx
describe('Test Suite Name', () => {
  beforeAll(() => { /* runs once before all tests */ })
  beforeEach(() => { /* runs before every test */ })
  afterEach(() => { /* runs after every test */ })
  afterAll(() => { /* runs once after all tests */ })

  it('should do something', () => {
    // 1️⃣ Arrange  → setup what you need
    // 2️⃣ Act      → run the code being tested
    // 3️⃣ Assert   → check the result
  })

  test('alternative syntax for it()', () => {
    // same as it()
  })
})
```

---

## Explanation of Syntax

| Keyword | Purpose |
| --- | --- |
| `describe()` | Groups related tests (optional, but common) |
| `it()` or `test()` | Defines a single test case |
| `expect()` | Assertion function — checks the output |
| `.toBe()` | Matcher (checks equality) |
| `.toEqual()` | Deep comparison (for objects/arrays) |
| `.toBeInTheDocument()` | Comes from `@testing-library/jest-dom` |
| `beforeEach()` / `afterEach()` | Setup or cleanup logic before/after tests |

---

## Example Matchers

| Matcher | Example | Meaning |
| --- | --- | --- |
| `.toBe(value)` | `expect(2 + 2).toBe(4)` | Exact equality |
| `.toEqual(obj)` | `expect({a:1}).toEqual({a:1})` | Deep object match |
| `.toBeTruthy()` | `expect(true).toBeTruthy()` | Checks truthy values |
| `.toBeFalsy()` | `expect(false).toBeFalsy()` | Checks falsy values |
| `.toContain()` | `expect([1,2,3]).toContain(2)` | Checks arrays/strings |
| `.toHaveLength()` | `expect([1,2,3]).toHaveLength(3)` | Length check |
| `.toMatch()` | `expect('Hello').toMatch(/hell/i)` | Regex match |
| `.toThrow()` | `expect(() => badFunc()).toThrow()` | Error thrown |
|   **`.toBeNull()`** |  |  |
| **`toBeDefined()`** |  |  |
| **`toBeUndefined()`** |  |  |
| **`.toBeGreaterThan()`** |  |  |
| **`.toBeLessThan()`** |  |  |
| **`.toBeGreaterThanOrEqual()`** |  |  |
| **`.toBeLessThanOrEqual()`** |  |  |
| **`.toContainEqual()`** |  |  |
| **`.toThrowError()`** |  |  |

---

# **Test Structure**

- **Describe Block:** Groups related tests together.
- **Test Cases:** Defines individual test scenarios.
- **Assertions:** Checks if the output matches the expected result.

---

[Jest Cheatsheet](https://www.notion.so/Jest-Cheatsheet-2bc8bc96b7d6805795dfc2ba56204f6a?pvs=21)
