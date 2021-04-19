const add = require("../index.js").add;
const greeter = require("../index.js").greeter;
const getDetails = require("../index.js").getDetails;

test("add() should return the sum that adds 2 numbers together", () => {
    // ARRANGE
    const num1 = 5;
    const num2 = 63;

    // ACT
    const result = add(num1, num2);

    // ASSERT
    expect(result).toBe(68);
})

test("Greeter should return a string with the a greeting", () => {
    // ARRANGE
    const name = "Rianne";
    // ACT
    const greeting = "Hallo " + name + "!";
    // ASSERT
    expect(greeting).toBe("Hallo Rianne!");
})

test("getDetails should return a string with firs/lastname and age", () => {
    // ARRANGE
    const firstName = "Rianne";
    const lastName = "Honders";
    const age = "31";
    // ACT
    const details = "Mijn naam is " + firstName + " " + lastName + " en ik ben " + age + " jaar oud.";
    // ASSERT
    expect(details).toBe("Mijn naam is Rianne Honders en ik ben 31 jaar oud.")

})
