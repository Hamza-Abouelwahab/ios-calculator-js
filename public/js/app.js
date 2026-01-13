let inputResult = document.querySelector("#input-result");

function appendtoInput(input) {
  inputResult.value += input;
}
function cleartoInput() {
  inputResult.value = "";
}

function deletedtoInput() {
    inputResult.value = inputResult.value.slice(0,-1)
}

function calculator() {
  try {
    let expr = inputResult.value.replace(/,/g, ".");
    expr = expr.replace(/(\d+(\.\d+)?)%/g,"($1/100)")
    let result = eval(expr);
    inputResult.value = parseFloat(result.toFixed(2));
  } catch (error) {
    inputResult.value = "error";
  }
}
