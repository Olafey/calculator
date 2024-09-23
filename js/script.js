function oops() {
  let newDemo = document.getElementById("demo");
  newDemo.innerHTML = "OOPS!!!";
}

let inputText = document.getElementById("inputText");
function but() {
  let input = document.getElementById("input");
  let outcome = input.value;
  console.log(outcome);

  inputText.innerText = outcome;
}
but();
