// test case description goes here
test("the less than operator checks that the value on the left is less than the value on the right", () => {
    // assertions go here
    expect(3 < 10).toBeTrue();
    expect(10 < 3).toBeFalse();
    expect(3 < 3).toBeFalse();
})

// test case description goes here
test("the less than or equal operator checks that the value on the left is less than or equal to the value on the right", () => {
    // assertions go here
    expect(3 <= 10).toBeTrue();
    expect(10 <= 3).toBeFalse();
    expect(3 <= 3).toBeTrue();
})

// test case description goes here
test("the greater than operator checks that the value on the left is greater than the value on the right", () => {
    // assertions go here
    expect(3 > 10).toBeFalse()
    expect(10 > 3).toBeTrue()
    expect(3 > 3).toBeFalse()
})

// test case description goes here
test("the greater than or equal operator checks that the value on the left is greater than or equal to the value on the right", () => {
    // assertions go here
    expect(3 >= 10).toBeFalse();
    expect(10 >= 3).toBeTrue();
    expect(3 >= 3).toBeTrue();
})