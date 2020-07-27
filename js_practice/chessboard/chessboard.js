
/*

Chessboard

Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size , outputting a grid
of the given width and height.

*/




//Board size: D x D
//Change to resize board.

let dimension = 15;
let board = "";

for(var i = 1; i <= dimension; i++){

    if( i % 2 !== 0){

        for(var j = 1; j <= dimension; j++){
            if(j % 2 !== 0)
                board += " ";
            else
                board += "#";            
        }
    }
    else{

        for(let k = 1; k <= dimension;k++){
            if(k % 2 !== 0) 
                board += "#";
            else
                board += " ";                
        }
    }
    board += "\n";
}

console.log(board);
console.log("Width: " + String(i-1) + "\nLength: " + String(j-1));


/*
ex. output:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 

*/