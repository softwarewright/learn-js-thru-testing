// test case description goes here
test("the = operator changes the variable on the left to the value on the right", () => {
    // assertions go here
    var x = 10;
    var y = 3;

    x = y;

    expect(x).toEqual(3)
    expect(y).toEqual(3)
})

// test case description goes here
test("+= changes the variable on the left to be itself plus the value on the right", () => {
    // assertions go here
    var x = 10;
    var y = 3;

    x += y;

    expect(x).toEqual(13);
})

// test case description goes here
test("-= operator changes the variable on the left to be itself minus the value on the right", () => {
    // assertions go here
    var x = 10;
    var y = 3;

    x -= y;

    expect(x).toEqual(7);
})

// test case description goes here
test("*= operator changes the variable on the left to be itself multiplied the value on the right", () => {
    // assertions go here
    var x = 10;
    var y = 3;

    x *= y;

    expect(x).toEqual(30);
})

// test case description goes here
test("/= operator changes the variable on the left to be itself divided by the value on the right", () => {
    // assertions go here
    var x = 10;
    var y = 3;

    x /= y;

    expect(x).toEqual(3.3333333333333335);
})

// test case description goes here
test("%= operator changes the variable on the left to be itself modulus the value on the right", () => {
    // assertions go here
    var x = 10;
    var y = 3;

    x %= y;

    expect(x).toBe(1);
})