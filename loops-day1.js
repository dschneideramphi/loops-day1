//Loops Day 1

//Structure of a typical loop:
//for(let i = __; i < ___; i++) {
  //Code goes here
//}

// //Prints 0-9 to the console
// for(let i = 0; i < 10; i++) {
//   console.log(i);
// }

//Starts at 6, increases by 1 until it reaches 20
// for(let i = 6; i < 21; i++) {
//     console.log(i);
// }

// //Go up by 10 until it reaches 100. doesn't print 100
// for(let i = 30; i < 100; i = i + 10) {
//     console.log(i);
// }

// //Start at 20, go down by 1 until 0. Won't print 0
// for(let i = 20; i > 0; i--) {
//     console.log(i);
// }

// //It's gonna go up exponentially by 2 till it reaches < 2000
// for(let i = 1; i < 2000; i = i * 2) {
//     console.log(i);
// }

// //Gonna print all the multiples of 5 up until 40
// for(let i = 3; i < 43; i++) {
//     if(i % 5 == 0) {
//         console.log(i);
//     }
// }

// //Does some math; prints out 5, 6, 7, 8, 9
// for(let i = 1; i < 6; i++) {
//     let a = i + 4;
//     let b = a * 2;
//     let c = b - a;
//     console.log(c);
// }


// //Prints 1 letter at a time
// let str1 = "Schneider"
// for(let i = 0; i < str1.length; i++) {
//     console.log(str1[i]);
// }

// //Printing the 3rd letter in the sentence
// let str1 = "Schneider is amazing and so cool omg and he has a big ego"
// for(let i = 0; i < str1.length; i = i + 3) {
//     console.log(str1[i]);
// }

// //Uses a temp string to print all on one line
// let str1 = "Schneider is amazing and so cool omg and he has a big ego"
// let temp = ""
// for(let i = 0; i < str1.length; i = i + 3) {
//     temp = temp + str1[i];
// }
// console.log(temp);


// //Prints the string backwards
// let str1 = "hello world"
// for(let i = str1.length - 1; i >= 0; i--) {
//     console.log(str1[i]);
// }