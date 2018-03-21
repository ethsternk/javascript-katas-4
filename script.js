// 1
console.log("--- 1. Reverse a string");
console.log("big bad bunnies");
console.log("big bad bunnies".split("").reverse().join(""));

// 2
console.log("--- 2. Reverse a sentence");
console.log("big bad bunnies");
console.log("big bad bunnies".split(" ").reverse().join(" "));

// 3
console.log("--- 3. Find the minimum value in an array");
let numbers1 = [140, 39, 1588, -59, 0, 12, -199];
console.log(numbers1);
console.log(Math.min(...numbers1));

// 4
console.log("--- 4. Find the maximum value in an array");
console.log(numbers1);
console.log(Math.max(...numbers1));

// 5
console.log("5. Calculate a remainder");
console.log("remainder of 147 / 13");
console.log(147 % 13);

// 6
console.log("--- 6. Return distinct values from a list including duplicates");
let numbers2 = [1, 3, 5, 4, 2, 5, 1, 5, 3, 6, 1, 5, 4, 8, 4, 21, 5, 4, 1, 0, 0, 2, 3];
console.log(numbers2);
let numbers2Distinct = [];
for (let i = 0; i < numbers2.length; i++) {
    if (numbers2Distinct.includes(numbers2[i]) === false) {
        numbers2Distinct.push(numbers2[i]);
    }
}
console.log(numbers2Distinct);

// 7
console.log("--- 7. Return distinct values and their counts");
console.log(numbers2);
let numbers2Object = {};
for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] in numbers2Object) {
        numbers2Object[numbers2[i]]++;
    } else {
        numbers2Object[numbers2[i]] = 1;
    }
}
console.log(numbers2Object);