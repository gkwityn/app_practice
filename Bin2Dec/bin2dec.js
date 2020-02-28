

function submitValue(){
    var input = document.getElementById("binaryInput").value;
        
    var validInput = false;

    validInput = validateForm(input);

    if(validInput)
        calculateBinary(input);    
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

function calculateBinaryTest(input){
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


function testSuit(){

    var tests = [
        "",
        11111111, 10101010,
        12341234, 10000000,
        10000001, 10000010,
        10000011, 10000100,
        10000101, 10000110,
        10000111, 10001000,
        10001001, 10001010,
        10001011, 10001100,
        10001101, 10001110,
        10001111, 10010000,
        10010001, 10010010,
        10010011, 10010100,
        10010101, 10010110,
        10010111, 10011000,
        10011001, 10011010,
        10011011, 10011100,
        10011101, 10011110,
        10011111, 10100000,
        10100001, 10100010,
        10100011, 10100100,
        10100101, 10100110,
        10100111, 10101000,
        10101001, 10101010,
        10101011, 10101100
    ];

    for(let x = 0; x < 100; x++){
        let r = Math.random().toString(36).substring(9);
        tests.push(r);        
    }

    for(let x = 0; x < tests.length - 1; x++){
        if(validateForm( tests[i]) ){
            calculateBinaryTest(test[i]);
        }
    }

}