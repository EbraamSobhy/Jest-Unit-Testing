// Mocking Functions
function fetchUser() {
    return "Real User";
}

function getUser() {
    return fetchUser();
}

module.exports = { fetchUser, getUser };
