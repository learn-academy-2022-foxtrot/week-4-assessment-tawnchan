// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// First I describe the function by giving it a name and set up the structure of the test.
// Add the 'it' statement to describe what the function is supposed to return.
// in this case, we plug in a given array and it returns out expected output. 
// We use the "arrayContaining method to sort through" the array.

describe("removeAndShift", () => {
    it("Removes first item of an array and returns the remaining content", () => {

      const colors1 = [
        "purple", "blue", "green", "yellow", "pink"
    ];

      expect(removeAndShift(colors1)).toEqual(
        expect.arrayContaining([
            "yellow", "blue", "pink", "green"
        ]));

      const colors2 = [
        "chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"
    ];

      expect(removeAndShift(colors2)).toEqual(
        expect.arrayContaining([
            "saffron", "aquamarine", "periwinkle", "indigo", "ochre"
        ]));

    });
  });

 // ReferenceError: removeAndShift is not defined (Good fail.)

// b) Create the function that makes the test pass.

// Declare a function and name it 'removeAndShift' that takes in an array as an argument. 
// Use .shift() to remove the first value from the array and return teh remaining.
// sort through the array applying Math.random to shuffle the values.
const removeAndShift = (arr) => {
  // .shift() method removes the first value from the array and returns array with remaining values.
  arr.shift();
  // Return the new, shuffled array using .sort() and Math.random() and return the array.
  // Because the values inside the arrays are strings we can use .sort(), else if it was a number, it will convert it to a string. 
  arr.sort((a, b) => 0.5 - Math.random())
  //return the array.
  return arr;
};

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.

// const votes1 = {upVotes: 13, downVotes: 2}
// // Expected output: 11
// const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31


describe("addVotes", () => {
    it("takes in an object that contains up votes and down votes and returns the net total of votes.", () => {

        const votes1 = {
            upVotes: 13, 
            downVotes: 2
        };

      expect(addVotes(votes1)).toEqual(
        (11));

        const votes2 = {
            upVotes: 2, 
            downVotes: 33
        };

      expect(addVotes(votes2)).toEqual(
        (-31));
    });
  });

  // output: ReferenceError: addVotes is not defined (Good Fail)

// b) Create the function that makes the test pass.
// declare function, call it 'addVotes' that takes in an object.
// and returns the object upVote value - the object downVotes to get the net total of votes.
const addVotes = (object) => {
    return object.upVotes - object.downVotes
  }


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// const dataArray1 = ["array", "object", "number", "string", "Boolean"]
// const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe("removeDuplicates", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate", () => {
      
      const dataArray1 = ["array", "object", "number", "string", "Boolean"];
      const dataArray2 = ["string", "null", "Boolean", "string", "undefined"];

      expect(removeDuplicates(dataArray1, dataArray2)).toEqual(
        expect.arrayContaining([
          "array",
          "object",
          "number",
          "string",
          "Boolean",
          "null",
          "undefined",
        ])
      );
    });
  });

  // output: ReferenceError: removeDuplicates is not defined (Good Fail)

// b) Create the function that makes the test pass

// declare the function, call it 'removeDuplicates' that takes in two arguments, array1 and array2.
// declare a new array that contains both arguments with its values spreaded out with the ... spread operator.
// return the the spread of the newArray and apply the 'set' operator to return the newArray with its values without duplicates.

const removeDuplicates = (array1, array2) => {
  
  const newArray = [...array1, ...array2];
  
  return [...newArray, new Set(newArray)];

};