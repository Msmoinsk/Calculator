const display = document.getElementById("display")

function appendToDisplay(input){
    if(display.value === "ERROR"){
        display.value = ""
    }

    let symbols = ["+","-","/","*"]
    // This is to check if the sign is after the num and if 2 sign clicked then replaced old with new 
    if(symbols.includes(input) && symbols.includes(display.value.slice(-1))){
        if(display.value.slice(-1) !== input){
            let symbol = display.value.slice(0,-1)
            symbol += input
            display.value = symbol
        }
    }else{
        display.value += input
    }

}
function clearDisplay(){
    display.value = ""
}
function popLast(){
    if(display.value === "ERROR"){
        display.value = ""
    }
    
    let text = display.value.slice(0,-1)
    display.value  = text
}
function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "ERROR"
    }
}