jest.mock("./mock");
const {fetchUser, getUser} = require('./mock');

// Mocking Functions
function fetchUser() {
    return "Real User";
}

function getUser() {
    return fetchUser();
}

test("mock fetchUser", () => {
  fetchUser.mockReturnValue("Mock User");
  expect(getUser()).toBe("Mock User");
});
