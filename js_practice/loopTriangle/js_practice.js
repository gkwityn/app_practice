// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following
// triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
// 37It may be useful to know that you can find the length of a string by writing
// .length after it.
// let abc = "abc";
// console.log(abc.length);
// // → 3



let out = "#";

for(let i = 1; i <= 7; i++){
    
    console.log(out.repeat(i));
}

//output:
// js_practice.js:5 #
// js_practice.js:5 ##
// js_practice.js:5 ###
// js_practice.js:5 ####
// js_practice.js:5 #####
// js_practice.js:5 ######
// js_practice.js:5 #######