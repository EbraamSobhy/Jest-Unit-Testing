const { getNumber, getUserName, fetchData, login, fetchUser, getUser } = require("./app");

test("returns user name", () => {
    expect(getUserName({ name: "Ebraam" })).toBe("Ebraam")
})

test("array contain number 3", () => {
    expect(getNumber()).toContain(3)
})

test("fetchData return data", async () => {
    const data = await fetchData();
    expect(data).toBe("Data fetched")
})

test("throws error if username is missing", () => {
    expect(() => login()).toThrow("username required");
});

test("returns welcome message", () => {
    expect(login("Ebraam")).toBe("Welcome Ebraam");
});

// Testing Mocking Functions
test("mock fetchUser", () => {
  fetchUser.mockReturnValue("Mock User");
  expect(getUser()).toBe("Mock User");
});
