const resultInput = document.getElementById("result");

export function calculate() {
  resultInput.value = "ERRO";
  resultInput.classList.add("error");
  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove("error");
}