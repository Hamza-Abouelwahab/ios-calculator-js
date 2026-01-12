let inputResult = document.querySelector("#input-result")
    
function appendtoInput(input) {
    inputResult.value += input 
}
function cleartoInput() {
    inputResult.value = ""; 
}
function calculator() {
    try{
        let expr = inputResult.value.replace(/,/g, '.');
        let result = eval(expr)
        inputResult.value = parseFloat(result.toFixed(2))
    }
    catch(error){
        inputResult.value = "error"
    }
}