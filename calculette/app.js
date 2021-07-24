let outputscreen =document.getElementById('output-screen')
const clear = document.getElementById ('clear')
function display(num){
    if(outputscreen.value=="error"){
        outputscreen.value=""
        
    }
    
    outputscreen.value += num;
}

function calculate (){
    try{
        outputscreen.value=eval(outputscreen.value)
    }catch{
        outputscreen.value="error"
        // alert ("invalid")
    }
}


clear.addEventListener('click',clean())
 function clean(){
    outputscreen.value="";
 }


function del(){
    if(outputscreen.value=="error"){
        outputscreen.value=""
    } 
    outputscreen.value=outputscreen.value.slice(0,-1)
     
}

// function clear(){
//     // outputscreen.value="";
//     alert("vous avez clear")
// }
