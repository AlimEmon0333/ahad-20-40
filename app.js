// ########## Chapter 21 to 40 ########## // 

// var allLower = userInput.toLowerCase();
// x = x.toLowerCase();
// y = y.toUpperCase();
// var originalVariable = "SomeText";
// var lowerCaseVariable = originalVariable.toLowerCase();
// var arr = ["Text"];
// var lowerCaseElement = arr[0].toLowerCase();
// var text = "hello";
// alert(text.toUpperCase());
// var cityName = "kaRacHi";
// var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
// var sameWords = "captain";
// var slicedWords = sameWords.slice(1, 3);
// var str = "Hello World";
// var characterCount = str.length;
// var animal = "elephant";
// var seg = animal.slice(2, 6);
// var text = "Some text";
// var characterCount = text.length;
// var text = "Example";
// var characterCount = text.length;
// var slicedText = text.slice(1, characterCount - 3);
// var str = "abcde";
// var character = str.charAt(2);
// var text = "Some text";
// var cha = text.charAt(9);
// var str = "Example";
// var x = str.charAt(str.length - 1);
// var input = "Hello";
// var cha = input.charAt(
// 1. Code the first line of an if statement that tests whether both are true: a has the same value as b and c has the same value as d.
// if (a === b && c === d) {
//     // Rest of the if statement code
//   }
//  2. Code the first line of an if statement that tests whether either or both are true: a has the same value as b or c doesn't have the same value as d.
// if (a === b || c !== d) {
//     // Rest of the if statement code
//   }
// 3. Code the first line of an if statement that tests whether I. name is either "Hamza" or "Arsalan". II. age is Less than 60.
// if ((name === "Hamza" || name === "Arsalan") && age < 60) {
//     // Rest of the if statement code
//   }
// 4. Declare two variables and assign them number values. If the first variable is less than the second variable or greater than the second variable, display an alert.
// let num1 = 10;
// let num2 = 20;
// if (num1 < num2 || num1 > num2) {
//   alert("The condition is true!");
// }
// 5. Declare 2 variables. Assign one of them your first name and the other one your last name. Code 2 prompts, asking for your first and your last name.If your answers match the two variables, display an alert.
// let firstName = "John";
// let lastName = "Doe";
// let enteredFirstName = prompt("Enter your first name:");
// let enteredLastName = prompt("Enter your last name:");
// if (enteredFirstName === firstName && enteredLastName === lastName) {
//   alert("Names match!");
// }
// 1. Code an if statement enclosing a nested if. If password is not empty, then check if password is not greater than 5 , then display an alert that says "Password must be greater than 5" if greater than 5 then Alert "OK".
// let password = prompt("Enter your password:");

// if (password !== "") {
//   if (password.length <= 5) {
//     alert("Password must be greater than 5");
//   } else {
//     alert("OK");
//   }
// }

// 2. Try this statement by yourself if (a === 1) { if (c === "Max") { alert("OK"); } }

// var a = 1;
// var c = "Max";

// if (a === 1) {
//   if (c === "Max") {
//     alert("OK");
//   }
// }

// 3. Code the first line of an if statement that avoids the nesting above by testing for multiple conditions. if (a === 1) { if (c === "Max") {  alert("OK"); } }

// if (a === 1 && c === "Max") {
//     alert("OK");
//   }

// 4. Declare two variables and assign them the same number value. Test two conditions, using nested if statements. Test whether the first variable equals the second variable and also whether it is less than or equal to the second variable. If the test passes—and it will—display an alert message.

// let a = 5;
// let b = 5;

// if (a === b) {
//   if (a <= b) {
//     alert("Conditions passed!");
//   }
// }

//===Chapter 15 (Array I)===//

// 1. Declare an empty array.

// var arr= []

//2. Code an array with 1 string element

// let myArray = ["Hello"];

//3. var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert using array index

// var alphabet = ["h", "i", "j", "k"];
// alert(alphabet[2]);

//4. var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total length of array.

// var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
// var length = alphabet.length;

// console.log(length);

// 5. Declare an array with one element and Add a second element with index in array. Create an alert whose message is the new element.

// let myArray = ["First Element"];
// myArray[1] = "Second Element";
// alert(myArray[1]);

//===Chapter 16 (Array II)===//

// 1. Code an array with 1 string element. Add an additional element to the array using push. Create an alert whose message is the last element.

// let myArray = ["Hello"];
// myArray.push("World");
// alert(myArray[myArray.length - 1]);

//2. var Alphabet=["h","i","j","k"] Remove the last element from the array Alphabet.

// var Alphabet = ["h", "i", "j", "k"];
// Alphabet.pop();
// console.log(Alphabet);

//3. var Alphabet=["h","i","j","k"] Add a new element, a number, to the end of an array.

// var Alphabet = ["h", "i", "j", "k"];
// Alphabet.push(42);
// console.log(Alphabet);

// 1. var sizes = ["S", "M", "XL", "XXL", "XXXL"]. Remove the first element of an array.

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.shift();
// console.log(sizes);

// 2. var sizes = ["S", "M", "XL", "XXL", "XXXL"].Add three number elements to the beginning of an array.

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.unshift(1, 2, 3);
// console.log(sizes);

// 3. Declare an array with one element. Add a second element to the beginning of the array.

// var myArray = ["first element"];
// myArray.unshift("second element");
// alert(myArray[0]);

// 4. var sizes = ["S", "M", "XL", "XXL", "XXXL"]. Insert "L" into the array between "M" and "XL".
 
// var sites = ["S", "M", "XL", "XXL", "XXXL"]
// sites[2]="L"
// alert (sites)

// 5. var sizes = ["S", "M", "XL", "XXL", "XXXL"]. Copy the first 3 sizes of the array and put them into a new array,regSizes.

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// var regSizes = sizes.slice(0, 3);
// console.log(regSizes);

// 6. var pets = ["dog", "cat", "ox", "duck", "frog"]. Add 2 elements after "dog" and remove "cat", "ox", and "duck".

// var pets = ["dog", "cat", "ox", "duck", "frog"];

// // Find the index of "dog" in the array
// var dogIndex = pets.indexOf("dog");

// // Remove "cat", "ox", and "duck" from the array
// pets.splice(dogIndex + 1, 3);

// // Add two elements after "dog"
// pets.splice(dogIndex + 1, 0, "elephant", "giraffe");

// console.log(pets);

// 7. var pets = ["dog", "cat", "ox", "duck", "frog"]; Remove "cat" and "ox".

// var pets = ["dog", "cat", "ox", "duck", "frog"];

// // Find the indices of "cat" and "ox" in the array
// var catIndex = pets.indexOf("cat");
// var oxIndex = pets.indexOf("ox");

// // Remove "cat" and "ox" from the array
// pets.splice(catIndex, 1);
// pets.splice(oxIndex, 1);

// console.log(pets);

// 8. var pets = ["dog", "cat", "ox", "duck", "frog", "flea"]; Reduce it to "duck" and "frog" using slice.

// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];

// // Use slice to extract the desired elements
// var reducedPets = pets.slice(3, 5);

// console.log(reducedPets);

// === Chapter 17 - 20 (for Loops)===//

// 1. Write a statement in which loop is to run 10 times.

// for (var i = 0; i < 10; i++) {
//   // Code to be executed inside the loop
// }

// 2. Code the first line of a for loop with the usual counter name, usual starting value, and usual increment. Run it 12 times using <= to specify how many loops.

// for (var usual = 0; usual <= 11; usual++) {
//   // Code to be executed inside the loop
// }

// 3. What are the 5 characters missing from this code, excluding any spaces that are missing? Type them in order, with no spaces or commas between them.for var i = 0 i <= 4 i++

// for (var i = 0; i <= 4; i++) {
//   // Code to be executed inside the loop
// }

// The missing characters were:

// Opening parenthesis "("
// Semicolon ";" after the initialization statement
// Semicolon ";" after the loop condition
// Closing parenthesis ")"
// Opening curly brace "{" to start the loop body

// 4. Code the first line of a for loop with a counter name that's not i. Code the usual starting value and usual increment. Run it 100 times using < to specify how many loops.

// for (var counter = 0; counter < 100; counter++) {
//   // Code to be executed inside the loop
// }

// 5. Code the first line of a for loop with the usual counter and the usual starting value. Run it 3 times using > to specify how manyn loops. Decrement it with each iteration.

// for (var counter = 3; counter > 0; counter--) {
//   // Code to be executed inside the loop
// }

// 6. The statement assigns the number of elements in the array to the variable.

// var variable = array.length;

// 7. Set a variable named “flag” with an initial Boolean value of your choice.

// var flag = true;

// 8. Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array pets.

// var pets = ["dog", "cat", "bird", "fish"];
// for (var i = 0; i < pets.length; i++) {
//   // Code to be executed inside the loop
// }

// 9. Coding Exercise: Set a for loop to run 10 iterations. On the second iteration, display the counter in an alert. (It should be 1.)

// for (let i = 0; i < 10; i++) {
//   if (i === 1) {
//     alert(i);
//   }
// }

// 10. Create an array which contains user names Code a prompt with the message "Enter first name". The user's response is assigned to firstName. Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array user names. Code an if statement that tests the presense of (user name) in an array.

// var userNames = ["ali", "ahad", "basit", "hassan"];
// var firstName = prompt("Enter first name");
// for (var i = 0; i < userNames.length; i++) {
//   if (userNames[i] === firstName) {
//     alert("Welcome, " + firstName);
//     break; 
//   }
//   if (i !== userNames.length ) {
//     alert("Please write the correct user name");
//     break;
//   }
// }

// 11. Complete this code to display an alert if a match isn't found. var matchFound = false; for (var i = 0; i < list.length; i++) {if (userInput === list[i]) { alert("Match found"); matchFound = true; break; } };

// var userInput=prompt("enter city name")
// var list=['karachi','islamabad']
// var matchFound = true;
// for (var i = 0; i < list.length; i++) {
//   if (userInput === list[i]) {
//     alert("Match found");
//     matchFound = false;
//     break;
//   }
// }
// if (matchFound) {
//   alert("Match not found");
// }
//  12. var firstArr = [“a”, “b”, “c”, “d”, “e”, “f”]; var secondArr = [1, 2, 3, 4, 5, 6]; Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array firstArr. In the scope of main loop Code the nested loop. Limit the number of nested loops by the number of elements in the array secondArr.After that concatenate the both loops. Expected Output: a1 a2 a3 a4 ... f6
// var firstArr = ["a", "b", "c", "d", "e", "f"];
// var secondArr = [1, 2, 3, 4, 5, 6];
 // Code the first line of the main for loop
// for (var i = 0; i < firstArr.length; i++) {
//   // Code to be executed inside the main loop
  //   // Code the first line of the nested for loop
//   for (var j = 0; j < secondArr.length; j++) {
//     // Code to be executed inside the nested loop
//     console.log(firstArr[i] + secondArr[j]);
//   }
// }

