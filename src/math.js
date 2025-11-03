// Add two numbers
function add(a, b) {
  return a + b;
}

// Subtract two numbers
function subtract(a, b) {
  return a - b;
}

// Multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Divide two numbers safely
function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

function myFunction(input) {
    if (typeof input !== 'number') {
        throw new Error('Invalid input')
    }
}

function fetchData(callback) {
    setTimeout(()=> {
        callback('coding');
    }, 1000)
}

function fetchPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('coding'), 1000);
    });
}

// Export functions
module.exports = { add, subtract, multiply, divide, myFunction, fetchData, fetchPromise };


