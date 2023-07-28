var click = "";
function addhidden() {
  click = document.querySelector(".text").value;
  document.querySelector(".love").textContent = click;
  var bottom = document.querySelector(".bottom");
  bottom.style.visibility = "visible";
}

function closehidden() {
  var bottom = document.querySelector(".bottom");
  bottom.style.visibility = "hidden";
}
