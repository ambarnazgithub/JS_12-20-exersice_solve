//chapter 12-13

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// var char = prompt("write any number or character");

// // var result = typeof

// if (char===char.toUpperCase()){
//     console.log("the string  is in uppercase")
//     }
//         else if (char===char.toLowerCase()){
//             console.log("the string is in lower case")
//     }
//     else {
//         console.log("the string is in mix uppercase and lower case character")
//     }


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal


// let userInput1 = +prompt ("Enter Integer1")
// let userInput2 = +prompt ("Enter Integer2")

// if(userInput1 > userInput2){
//     alert( userInput1 + " is larger")
// }
// else if (userInput2 > userInput1){
//     alert(userInput2 + "is larger")
// }
// else if(userInput1 === userInput2){
//     alert("both are equal")
// }

// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero


// let checkNum = +prompt("Enter a number")
// if(checkNum > 0  ){
//     alert("Number is Positive")
// }
// else if (checkNum === 0){
//     alert("Number is zero")
// }
// else if (checkNum < 0 ){
//     alert("Number is Negative ")
// }
// else{
//     alert("Not Valid")
// }


// 4. Write a program that takes a character (i.e. string of 
//     length 1) and returns true if it is a vowel, false otherwise


// var char = prompt("Enter any single  character: ");
// if ( char === "a" ||
//     char ===  "e" || 
//     char === "i" || 
//     char === "o" || 
//     char === "u" ||
//     char === "A" ||
//     char === "E" ||
//     char === "I" ||
//     char === "O" ||
//     char === "U") {
//   alert("True");
// }
// else{
//     alert("false") ;
// }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise



// let originalPassword = prompt("Enter a password:");
// let confirmPassword = prompt("Confirm your password:");

// // Check if the user entered the original password
// if (!originalPassword || originalPassword === "") {
//     alert("Please enter your password");
// } else if (originalPassword === confirmPassword) {
//     alert("Correct! The password you entered matches the original password.");
// } else {
//     alert("Incorrect password");
// }

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }


// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// console.log(greeting); 


// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statement
 

// If the hour is between 0 and 11, it's AM.
// If the hour is between 12 and 23, it's PM
// 0000 → 12 AM (midnight)
// 0800 → 8 AM
// 1200 → 12 PM (noon)
// 1900 → 7 PM
// 2300 → 11 PM  for user simplifies 


// let time = prompt("What Time is it now!")
// if (time >= 0000 && time < 1200){
//     alert("Good Morning!")
// } 
// else if (time >= 1200 && time < 1700){
//     alert("Good Afternoon!")
// } 
// else if (time >= 1700 && time < 2100){
//     alert("Good Evening!")
// } 
// else if (time >= 2100 && time < 2359){
//     alert("Good Night!")
// }

//chapter 14-16

// 1. Declare an empty array using JS literal notation to store
// student names in future


// let studentName = [];

// 2. Declare an empty array using JS object notation to store
// student names in future
// let studentNames = new Array();


// 3.Declare and initialize a strings array

// let stringsArray = ["Apple", "Banana", "Cherry"];
// console.log( stringsArray )


// 4. Declare and initialize a numbers array

// let numberArray = [4,5,6,7,8,9]
// console.log(numberArray)

// 5. Declare and initialize a boolean array.
// let booleanArray = [true, false, true, false];
// console.log(booleanArray)

// 6. Declare and initialize a mixed array

// let mixedArray = [1,false , "John"]
// console.log(mixedArray)


// 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like

// var qualificationArr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.PHIL", "PhD"];
// for (var i = 0; i < qualificationArr.length; i++) {
//   document.write((i + 1) + ") " + qualificationArr[i] + "<br>");
// }

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display the scores & percentages of students like


// let stdName = [ "Insia" , "Irza" , "Ifra"]
// let stdScore = [480, 350, 420]
// let totalMarks = 500;
// let percentageOfStd1 = ((stdScore[0]* 100)/totalMarks)
// let percentageOfStd2 = ((stdScore[1]* 100)/totalMarks)
// let percentageOfStd3 = ((stdScore[2]* 100)/totalMarks)
// document.write("Score of " + stdName[0] + " is " + stdScore[0] +". " + "Percentage: " + percentageOfStd1 +"%")
// document.write("<br>")
// document.write("Score of " + stdName[1] + " is " + stdScore[1] +". " + "Percentage: " + percentageOfStd2  +"%" )
// document.write("<br>")
// document.write("Score of " + stdName[2] + " is " + stdScore[2] +". " + "Percentage: " + percentageOfStd3  +"%" )


// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// let colorNames = ["orange","red","black","blue","white"]
// document.write(colorNames)
// let userWant = prompt ("what color you wants to add to the starting  of the array")
// colorNames.unshift(color)
// document.write("<br>")
// document.write(colorNames)
// //b
// var color = prompt("What color do you add in the ending of an array?")
// colorNames.push(color)
// document.write("<br>")
// document.write(colorNames)
// document.write("<br>")

// // c
// colorNames.unshift("Grey," ,"White")
// document.write(colorNames)
// document.write("<br>")

// //d 
// colorNames.shift()
// document.write(colorNames)
// document.write("<br>")

// // e
// colorNames.pop()
// document.write(colorNames)
// document.write("<br>")

// // f
// var whichIndex = prompt("In which index you want to add a Color name ?")
// var   addColor = prompt("type a color name which you want to add in a array ? ")
// colorNames.splice(whichIndex , 0, addColor );
// document.write(colorNames)
// document.write("<br>")

// //g
// var indexDelete = prompt("At which index you want to delete a Color name ?")
// var   howManyColors = prompt("how many colors you want to delete in an array ? ")
// colorNames.splice(indexDelete , howManyColors, );
// document.write(colorNames)
// document.write("<br>")

// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.

// var stdscores = [233,333,44,535,353]
// document.write(stdscores)

// stdscores.sort(function(a, b){return a-b})
// document.write(stdscores)

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var cities = ["karachi","lahore","islamabad","Quetta","Peshawar"]

// var fvrtcities=cities.slice(2,3)
// document.write(fvrtcities)

// 12. Write a program to create a single string from the
// below mentioned array:
// var array = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var array = ["This", "is ", "my ", "dog"];

// var arr2 = array.join(" ",",")

// document.write(arr2)

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

// var arr1 = ["samsung","nokia","oppo","moto","zte","infinix"]

// document.write(`<select>
//     <br><option>${arr1[0]}</option>
//     <br><option>${arr1[1]}</option>
//     <br><option>${arr1[2]}</option>
//     <br><option>${arr1[3]}</option>
//     <br><option>${arr1[4]}</option>
//     </select>`)
                        

//   chapter 17-20 
// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var arr = [
//     [
//         [
//             [
//                 [
//                     [
//                         []
//                     ]
//                 ]
//             ]
//         ]
//     ]
// ]

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

// var arr = [["0123"],["1012"],["2101"]]
// document.write(arr)

// 3. Write a program to print numeric counting from 1 to 10.

// for (i=0; i<=10; i++){
//     document.write(i+"<br>"
//     )
// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var num1 = +prompt("write any number for table")
// var num2 = +prompt("write how many time you need the multiflication")

// for (i=1; i<=num2; i++){
//     document.write(`${num1} X ${i} = ${num1*i}<br>`)
// }

// 5. Write a program to print items of the following array
// using for loop:
// fvrtfruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// var fvrtfruits = ["apple","banana","mango","orange"]

// for(i=0; i<fvrtfruits.length; i++){
//     document.write(fvrtfruits[i]+"<br>")
// }

// 6. Generate the following series in your browser. See
// example output.

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// for(i=0; i<=15; i++){
//     document.write(i+"<br>")
// }

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// for (i=10; i>0; i--){
// document.write(i="<br>")
// }

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// for (i=0; i<=20; i=i+2){
//     document.write(i+"<br>")
// }

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

// for (i=1; i<=20; i=i+2){
//     document.write(i+"<br>")
// }

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// for (i=0; i<=20; i=i+2){
//     document.write(i+" K")
// }

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var a=["cake","apple pie","peach","bnanana","orange"]
// var userinput = prompt("what you want to search")

// for(i=0; i<a.length; i++){
//     if(a[i].includes(userinput)){
//         alert(`${userinput} is found `)
//     }

//     else{
//         alert(`${userinput} not found`)
//     }
//     break
// }

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// var arr = [2,42,434,345,3232,2323,2323,23,23,21,3,13253,53,5,3,53,456,5]
// // sort this arr
// arr.sort(function(a,b){ return a-b
//     })

// for(i=0; i<arr.length; i++){
// }
// document.write(`the largest number is ${arr[i-1]}`)

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// var arr = [2,42,434,345,3232,2323,2323,23,23,21,3,13253,53,5,3,53,456,5]
// // sort this arr
// arr.sort(function(a,b){ return b-a
//     })

// for(i=0; i<arr.length; i++){
// }
// document.write(`the largest number is ${arr[i-1]}`for

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// for (i=0; i<=100; i=i+5){
//     document.write(i)
// }

