/*
Bean counting
*************

You can get the Nth character, or letter, from a string by writing "string"[N] .
The returned value will be a string containing only one character (for example,
"b" ). The first character has position 0, which causes the last one to be found at
position string.length - 1 . In other words, a two-character string has length
2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters there are in the
string.

Next, write a function called countChar that behaves like countBs , except
it takes a second argument that indicates the character that is to be counted
(rather than counting only upperc
*/

countBs = (str) => {

    let count = 0;

    for(let i in str){
        if(str[i] == 'B'){
            count++;
        }
    }    
    return count;
}


countChar = (str, char) =>{

    let count = 0;

    for(let i in str){
        if(str[i] == char){
            count++;
        }
    }    
    return count;

}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }



 let str = makeid(100);

 console.log("String: " + str + ", " + "Search: " + "B, " + " Count:" + countBs(str) );

 let str2 = makeid(100);

 console.log("String: " + str + ", " + "Search: " + "c, " + " Count:" + countChar(str2, "c") );