var a = new Array;

async function start(){   


    //insertionSort();
    //bubble_Sort();

    var sortNode =  document.getElementById("sortingAlgorithm");
    var sortAlg = sortNode.options[sortNode.selectedIndex].value;
    
    switch(sortAlg){
        case "insertionsort":
             await insertionSort(a);
             break;
         
        case "selectionsort":
            selectionSort();
             break;    
         
        case "quicksort":
             bubble_Sort(a);
             break;
        
        case "bubblesort":
             bubble_Sort(a);
             break;
         
    }
        
}  

async function reset(){
    
    a = new Array;

    var myEle = document.getElementById("check_Element");
    
    if(myEle){       
        deleteElements();
       await createRandomBar();
    }   
    else
       await createRandomBar();       
    
}  
  


async function swap(a, i, j) {

    await sleep(50);
    
    var temp = a[i];
    var tempElement = document.getElementById(String(i)).style.height;

    a[i] = a[j];
    document.getElementById(String(i)).style.height = 
    document.getElementById(String(j)).style.height;
    
    a[j] = temp;
    document.getElementById(String(j)).style.height = tempElement;
}



async function insertionSort(){
    //insertion sort        
    var len = a.length;

    for (var i = 0; i < len - 1; i++  ) {
        
        var j_min = i;

        for (var j = i + 1; j < len; j++) {
            if (a[j] < a[j_min]) {
                j_min = j;
            } 
        }            
        if (j_min !== i) {
           await swap(a, i, j_min);                                
        }        
    }  
}



function bubble_Sort(){  
}



function selectionSort(){
    
    var minValue ;
    var minIndex ;
    var index ;
    var startScan;
    
    for(startScan = 0; startScan < (a.length - 1);  startScan++){
        minIndex = startScan;
        minValue = a[startScan];

        for(index = startScan + 1 ; index < a.length; index++){
            if( a[index] < minValue){
                minValue = a[index];                
                minIndex = index;
            }
        }
        a[minIndex] = a[startScan];
        document.getElementById(String(minIndex)).style.height =
        document.getElementById(String(startScan)).style.height;
        
        a[startScan] = minValue;
        document.getElementById(String(startScan)).style.height = minValue;
        

    }
}



async function createRandomBar(){
    
    //alert("check does not exists");

    let margin = 0;        

    for(let x = 0; x < 100; x++){    
        
        await sleep(10);
        
        let height = Math.floor((Math.random() * 600) + 1)

        var test = document.createElement('div');
        test.id = String(x);
        test.style.cssText = "position: absolute; bottom: 0; background-color: rgba(30, 143, 255," +
                            "0.808); width: 8px; border: solid black 0.5px; height: " + height + "px; margin-left: " + margin + "%;" 
        
        var insert = document.querySelector('#insert');
        insert.appendChild(test);   
        
        a.push(height);
        margin++;            
    }

    checkElement = document.createElement('div');
    checkElement.id = "check_Element";
    let insertCheck = document.querySelector('#insert');
    insertCheck.appendChild(checkElement);
}

function deleteElements(){
    //alert("check exists");  
    const myNode = document.getElementById("insert");

    while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild);
    }
}            


function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}