
// forEach(): Executes a provided function once for each array element.


// const numbers = [1, 2, 3];
// numbers.forEach(number => console.log(number * 2)); 


// map(): Creates a new array with the results of calling a provided function on every element in the calling array.
const value = [1, 2, 3];
const doubledValue = value.map(value => value* 2);
console.log(doubledValue); 

// filter(): Creates a new array with all elements that pass the test implemented by the provided function.
const number = [1, 2, 3, 4, 5];
const evenNumber= number.filter(number => number % 2 === 0);
console.log(evenNumber); 


// find(): Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

const numbe= [1, 3, 5, 7, 9];
const foundNumbe = numbe.find(numbe=> numbe> 5);
console.log(foundNumbe); 

// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

const fruits = ['apple', 'banana', 'orange'];
fruits.splice(1, 1, 'grape'); // Removes 1 element at index 1 and inserts "grape"
console.log(fruits); 

// slice(): Extracts a section of a string and returns it as a new string, without modifying the original string.
const message = "Hello, world!";
const slicedMessage = message.slice(0, 5);
console.log(slicedMessage); 





// Explanation:
// 1. const numbers = [1, 2, 3, 4, 5];:
// This line declares a constant array named numbers containing the numbers 1, 2, 3, 4, and 5. 
// 2. numbers.forEach(function(number) { console.log(number * 2); });:
// This line uses the forEach method on the numbers array. 
// forEach(function(number) { ... }): The forEach method takes a callback function as an argument. This function is executed for each element in the numbers array. 
// function(number) { ... }: The callback function takes a single argument, number, which represents the current element being processed in the array. 
// console.log(number * 2);: Inside the callback function, this line multiplies the current number by 2 and logs the result to the console.

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number * 2);
});



// The find() method in JavaScript is used to retrieve the first element in an array that satisfies a provided testing function. 
// It iterates through the array and executes the callback function for each element until it finds one where the function returns true. If such an element is found, find() immediately returns that element's value. If no element satisfies the condition, find() returns undefined.


const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);
9
console.log(found);
// // Expected output: 12
// // In this example, the find() method searches for the first number in the array that is greater than 10. 
// The callback function element => element > 10 checks if each element is greater than 10. The first element that satisfies this condition is 12, so find() returns 12.
// JavaScript

const array2 = [
    { name: 'apple', quantity: 2 },
    { name: 'banana', quantity: 0 },
    { name: 'cherry', quantity: 5 }
  ];
  
const foundObject = array2.find(item => item.quantity > 0);

console.log(foundObject);
// Expected output: { name: "apple", quantity: 2 }
// This example demonstrates find() with an array of objects. It searches for the first object where the quantity property is greater than 0. 
// The first object that meets this criterion is { name: 'apple', quantity: 2 }, so find() returns this object.


// Given an array with negative expenses return an array with positive expenses

function getPositiveExpenses(expenses) {
  return expenses.filter(expense => expense > 0);
}

const expenses = [100, -25, 300, -50, 200];
const positiveExpenses = getPositiveExpenses(expenses);
console.log(positiveExpenses); 

// let savedPassword="password123"
// let newPassword="PassWord123 "
// let newPassword1= newPassword.replace(" ","") .toLowerCase;

// if(newPassword1.toLowerCase()===savedPassword.toLowerCase){
//   console.log(true)
// }

// else{
//   console.log(false)
// }


let arr= ["boy","cat"]

function removeAndFindDuplicates(arr){
  let arr2 =["the","way"]
}
if (arr2.includes("food")){
  console.log("food");

}

else{
  console.log("The search word was not found")
}
