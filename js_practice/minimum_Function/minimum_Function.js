
/*

Minimum

The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can build something like that now. 

Write a function
min that takes two arguments and returns their minimum.

*/

function generateNumArray(){
    let array = [];

    for(let i = 0; i < 100; i++){

        let nums = [Math.floor(Math.random()*101)+1,
                    Math.floor(Math.random()*101)+1 ];
        
        array.push(nums);        
    }
    return array;
}




function compareNums(arr){
    if(arr[0] <= arr[1])
        return arr[0];
    else
        return arr[1];
}




const dataArray = generateNumArray();

console.log(dataArray);

for (let index = 0; index < dataArray.length; index++){
    console.log(dataArray[index][0] + ", " + dataArray[index][1] + "  lowest: " + compareNums(dataArray[index]));
}




