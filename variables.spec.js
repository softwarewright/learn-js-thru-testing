// test case description goes here
test("the meaning of life is 42", () => {
    // assertions go here
    var theMeaningOfLife = 42;
    expect(theMeaningOfLife).toEqual(42);
})

// test case description goes here
test("a sequence of text is a string", () => {
    // assertions go here
    var aSequenceOfText = "abc";

    expect(aSequenceOfText).toBeString()
})


// test case description goes here
test("a numeric variable can be 10, 34, or 90", () => {
    // assertions go here
    var numericValue1 = 10;
    var numericValue2 = 34;
    var numericValue3 = 90;

    expect(numericValue1).toBeNumber()
    expect(numericValue2).toBeNumber()
    expect(numericValue3).toBeNumber()
})


// test case description goes here
test("a boolean value can be true or false", () => {
    // assertions go here
    var trueValue = true;
    var falseValue = false;

    expect(trueValue).toBeTrue()
    expect(falseValue).toBeFalse()
})

// test case description goes here
test("an array stores multiple values in a single location", () => {
    // assertions go here
    var arrayValue = [1, "two", 3];

    expect(arrayValue[0]).toBe(1);
    expect(arrayValue[1]).toBe("two");
    expect(arrayValue[2]).toBe(3);
})

// test case description goes here
test("an object contains a key/value collection of data", () => {
    // assertions go here
    var objectValue = { name: "Software Wright" };

    expect(objectValue).toHaveProperty("name", "Software Wright")
})