// Practice

// Testing Strings & Arrays
function getUserName(user) {
    return user.name;
}

function getNumber() {
    return [1, 2, 3, 4,];
}

// Testing Async Code (Promises)
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 1000);
    });
}

// Testing Errors
function login(username) {
    if (!username){
        throw new Error("username required");
    }
    return "Welcome " + username
}

module.exports = { getUserName, getNumber, fetchData, login };
