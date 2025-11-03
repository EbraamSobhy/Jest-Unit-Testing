const { add, subtract, multiply, myFunction, fetchData, fetchPromise } =  require('../src/math.js');

test("testing the math opertators add", () => {
    expect(add(2,3)).toBe(5)
});

test("testing the math opertators subtract", () => {
    expect(subtract(5,3)).toBe(2)
});

test("testing the math opertators multiply", () => {
    expect(multiply(2,4)).toBe(8)
});

// Describe and Matchers

describe('Matchers', () => {

    test('Multiply', () => {
        expect(5 * 10).toBe(50);
    })

    test('Sum', () => {
        expect(5 + 10).toBe(15);
    })

})

test('Null is False', () => {
    const n = null;
    expect(n).toBeFalsy();
})

// Function Throw error
test('throw on invalid imput', () => {
    expect(() => {
        myFunction(invalid);
    }).toThrow();
})

// Async/Await Testing
test('testing data', done => {
    function callback(data) {
        try {
            expect(data).toBe('coding');
            done();
        } catch(error) {
            done(error);
        }
    }

    fetchData(callback);
})

// Promise
test('Promise data', () => {
    return expect(fetchPromise()).resolves.toBe('coding');
})
