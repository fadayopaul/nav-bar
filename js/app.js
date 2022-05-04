input = document.getElementById("search");

function ph() {
  input.setAttribute("placeholder", "Type and hit Enter");
}

function phr() {
  input.setAttribute("placeholder", "type to search");
}

input.addEventListener("mouseover", ph);
input.addEventListener("mouseout", phr);
