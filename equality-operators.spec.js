// test case description goes here
test("equality operator == checks that two values are loosely equal", () => {
    // assertions go here
    expect(10 == '10').toBeTrue();
    expect(10 == 3).toBeFalse();
    expect(10 == 10).toBeTrue();
})

// test case description goes here
test("strict equality operator === checks that two values are strictly equal", () => {
    // assertions go here
    expect(10 === '10').toBeFalse();
    expect(10 === 3).toBeFalse();
    expect(10 === 10).toBeTrue();
})

// test case description goes here
test("inequality operator != checks that two values are loosely unequal", () => {
    // assertions go here
    expect(10 != '10').toBeFalse();
    expect(10 != 3).toBeTrue();
    expect(10 != 10).toBeFalse();
})

// test case description goes here
test("strict inequality operator !== checks that two values are strictly unequal", () => {
    // assertions go here
    expect(10 !== '10').toBeTrue();
    expect(10 !== 3).toBeTrue();
    expect(10 !== 10).toBeFalse();
})