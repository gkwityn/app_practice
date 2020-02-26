function submitValue(){
    var input = document.getElementById("binaryInput").value;
        
    var validInput = false;

    validInput = validateForm(input);

    if(validInput)
        calculateBinary(input);
    
    //  Input Validation:
    //
    //  11111111
    //  10101010
    //  12341234
    //  abc
    //  ""
}   


function validateForm(input){
    if(input == "" || input == undefined){
        alert("Input Error, Empty/Undefined Str");
        return false;
    }    
    else if(isNaN(input)){
        alert("Input Error, NaN");
        return false;
    }
    else if (input.length != 8){
        alert("Input Error, Length");
        return false;
    }
    else if (!binary(input)){
        alert("Input Error, Not Binary");
        return false;    
    }
    else{
        return true;
    }
}

function binary(input){
    
    var isBin = undefined;

    for(var i = 0; i < input.length - 1; i++){
        if(parseInt(input.charAt(i)) === 1 || 
           parseInt(input.charAt(i)) === 0)
            isBin = true;
        else
            return isBin = false;
    }
    return isBin;
}

function calculateBinary(input){
    var total = 0;
    var exponent = 0;

    for(var j = input.length - 1; j >=0; j--){
        if(parseInt(input.charAt(j)) === 1){
            total += Math.pow(2, exponent);
        }
        exponent++;
    }
    
    //Print Decimal result
    document.getElementById("decimalOutput").value = total;
}