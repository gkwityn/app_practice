var array = new Array;

function reset(){
    
    let margin = 0;        

    for(let x = 0; x < 100; x++){

        let height = Math.floor((Math.random() * 600) + 1)

        var test = document.createElement('div');
        test.id = String(x);
        test.style.cssText = "position: absolute; background-color: rgba(30, 143, 255," +
                             "0.808); width: 8px; height: " + height + "px; margin-left: " + margin + "%;" 
        
        var insert = document.querySelector('#insert');
        insert.appendChild(test);   
        
        array.push(height);
        margin++;
    }
}


function start(){    

    for(var i = 0; i < array.length; i++) {
        for(var j = 1; j < array.length; j++) {
          if(array[j - 1] > array[j]) {
            swap(array, j - 1, j);            
          }
     }
    }   
}

    
    
  


function swap(array, i, j) {
    var temp = array[i];
    var tempElement = document.getElementById(String(i)).style.margin;

    array[i] = array[j];
    document.getElementById(String(i)).style.margin = document.getElementById(String(j)).style.margin;

    array[j] = temp;
    document.getElementById(String(j)).style.margin = tempElement;
}