// 1 --------------------------------------------------------------------------------------
function reverseString(string) {
    return string.split("").reverse().join("");
}

function testReverseString() {
    let result = reverseString("big bad bunnies");
    console.assert(result === "seinnub dab gib", {
        "function": "reverseString('big bad bunnies')",
        "expected": "seinnub dab gib",
        "result": result
    });
}
testReverseString();

function testReverseString2() {
    let result = reverseString("jib jub wibble wub");
    console.assert(result === "buw elbbiw buj bij", {
        "function": "reverseString('jib jub wibble wub')",
        "expected": "buw elbbiw buj bij",
        "result": result
    });
}
testReverseString2();

// 2 --------------------------------------------------------------------------------------
function reverseSentence(string) {
    return string.split(" ").reverse().join(" ");
}

function testReverseSentence() {
    let result = reverseSentence("big bad bunnies");
    console.assert(result === "bunnies bad big", {
        "function": "reverseSentence('big bad bunnies')",
        "expected": "bunnies bad big",
        "result": result
    });
}
testReverseSentence();

function testReverseSentence2() {
    let result = reverseSentence("jib jub wibble wub");
    console.assert(result === "wub wibble jub jib", {
        "function": "reverseSentence('jib jub wibble wub')",
        "expected": "wub wibble jub jib",
        "result": result
    });
}
testReverseSentence2();

// 3 --------------------------------------------------------------------------------------
function findMinValue(numbers) {
    return Math.min(...numbers);
}

function testFindMinValue() {
    let result = findMinValue([140, 39, 1588, -59, 0, 12, -199]);
    console.assert(result === -199, {
        "function": "findMinValue([140, 39, 1588, -59, 0, 12, -199])",
        "expected": -199,
        "result": result
    });
}
testFindMinValue();

function testFindMinValue2() {
    let result = findMinValue([140, 39, -1588, -59, 0, 12, -199]);
    console.assert(result === -1588, {
        "function": "findMinValue([140, 39, -1588, -59, 0, 12, -199])",
        "expected": -1588,
        "result": result
    });
}
testFindMinValue2();

let numbers1 = [140, 39, 1588, -59, 0, 12, -199];

// 4 --------------------------------------------------------------------------------------
function findMaxValue(numbers) {
    return Math.max(...numbers);
}

function testFindMaxValue() {
    let result = findMaxValue([140, 39, 1588, -59, 0, 12, -199]);
    console.assert(result === 1588, {
        "function": "findMaxValue([140, 39, 1588, -59, 0, 12, -199])",
        "expected": 1588,
        "result": result
    });
}
testFindMaxValue();

function testFindMaxValue2() {
    let result = findMaxValue([140, 39, -1588, -59, 0, 12, -199]);
    console.assert(result === 140, {
        "function": "findMaxValue([140, 39, -1588, -59, 0, 12, -199])",
        "expected": 140,
        "result": result
    });
}
testFindMaxValue2();

// 5 --------------------------------------------------------------------------------------
function findRemainder(numerator, denominator) {
    return numerator % denominator;
}

function testFindRemainder() {
    let result = findRemainder(137, 14);
    console.assert(result === 11, {
        "function": "findRemainder(137, 14)",
        "expected": 11,
        "result": result
    });
}

function testFindRemainder2() {
    let result = findRemainder(192, 14);
    console.assert(result === 10, {
        "function": "findRemainder(192, 14)",
        "expected": 10,
        "result": result
    });
}

// 6 --------------------------------------------------------------------------------------
function findDistinctValues(values) {
    let distinctValues = [];
    for (let i = 0; i < values.length; i++) {
        if (distinctValues.includes(values[i]) === false) {
            distinctValues.push(values[i]);
        }
    }
    return distinctValues;
}

function testFindDistinctValues() {
    let result = findDistinctValues([1, 3, 5, 4, 2, 5, 1, 5, 3, 6, 1, 5, 4, 8, 4, 21, 5, 4, 1, 0, 0, 2, 3]);
    console.assert(result === [1, 3, 5, 4, 2, 6, 8, 21, 0], {
        "function": "findDistinctValues([1, 3, 5, 4, 2, 5, 1, 5, 3, 6, 1, 5, 4, 8, 4, 21, 5, 4, 1, 0, 0, 2, 3])",
        "expected": [1, 3, 5, 4, 2, 6, 8, 21, 0],
        "result": result
    })
}
testFindDistinctValues();

function testFindDistinctValues2() {
    let result = findDistinctValues([1, 3, 5, 4, 2, 5, 1, 5, 3, 6, 1, 5, 4, 8, 4, 5, 4, 1, 0, 0, 2, 3]);
    console.assert(result === [1, 3, 5, 4, 2, 6, 8, 0], {
        "function": "findDistinctValues([1, 3, 5, 4, 2, 5, 1, 5, 3, 6, 1, 5, 4, 8, 4, 5, 4, 1, 0, 0, 2, 3])",
        "expected": [1, 3, 5, 4, 2, 6, 8, 0],
        "result": result
    })
}
testFindDistinctValues2();

// 7 --------------------------------------------------------------------------------------
function findDistinctValueCounts(values) {
    let distinctValueCounts = {};
    for (let i = 0; i < values.length; i++) {
        if (values[i] in distinctValueCounts) {
            distinctValueCounts[values[i]]++;
        } else {
            distinctValueCounts[values[i]] = 1;
        }
    }
    return distinctValueCounts;
}

function testFindDistinctValueCounts() {
    let result = findDistinctValueCounts([1, 1, 1, 3]);
    console.assert(result === { 1: 3, 3: 1 }, {
        "function": "findDistinctValueCounts([1, 1, 1, 3])",
        "expected": { 1: 3, 3: 1 },
        "result": result
    })
}
testFindDistinctValueCounts();

function testFindDistinctValueCounts2() {
    let result = findDistinctValueCounts([1, 1, 1, 3, 5, 5, 5, 5]);
    console.assert(result === { 1: 3, 3: 1, 5: 4 }, {
        "function": "findDistinctValueCounts([1, 1, 1, 3])",
        "expected": { 1: 3, 3: 1, 5: 4 },
        "result": result
    })
}
testFindDistinctValueCounts2();

// 8 --------------------------------------------------------------------------------------
function calculateResult(expression, object) {
    let basicExpression = [];
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] !== " ") {
            basicExpression.push(expression[i]);
        }
    }
    for (let i = 0; i < basicExpression.length; i++) {
        if (basicExpression[i] in object) {
            basicExpression[i] = object[basicExpression[i]];
        }
    }
    let result = basicExpression[0]
    for (let i = 2; i < basicExpression.length; i += 2) {
        if (basicExpression[i - 1] === "+") {
            result += basicExpression[i];
        }
        if (basicExpression[i - 1] === "-") {
            result -= basicExpression[i];
        }
    }
    return result;
}

function testCalculateResult() {
    let result = calculateResult("a + b+c -d", { a: 1, b: 7, c: 3, d: 14 });
    console.assert(result === -3, {
        "function": "calculateResult('a + b+c -d', { a: 1, b: 7, c: 3, d: 14 })",
        "expected": -3,
        "result": result
    })
}
testCalculateResult();

function testCalculateResult2() {
    let result = calculateResult("a + b-c +d", { a: 1, b: 7, c: 3, d: 14 });
    console.assert(result === 19, {
        "function": "calculateResult('a + b-c +d', { a: 1, b: 7, c: 3, d: 14 })",
        "expected": 19,
        "result": result
    })
}
testCalculateResult2();