import { clear, charKey, keyDown } from "./digitos.js";
import { copied } from "./copied.js";
import { calculate } from "./calculate.js";
import { themeSwitcher } from "./themeSwitcher.js";

const input = document.getElementById("input");

document.querySelectorAll(".charKey").forEach(charKey);

document.getElementById("clear").addEventListener("click", clear);

input.addEventListener("keydown", keyDown);

document.getElementById("equal").addEventListener("click", calculate);

document.getElementById("copyToClipboard").addEventListener("click", copied);

document
  .getElementById("themeSwitcher")
  .addEventListener("click", themeSwitcher);
