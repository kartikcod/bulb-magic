var bulb = document.querySelector(".bulb");
var btn = document.querySelector("button");
var magic = 0

btn.addEventListener("click", function () {
  if (magic == 0) {
    bulb.style.backgroundColor = "yellow"
    console.log("click")
    magic = 1
  } else {
    bulb.style.backgroundColor = "transparent"
    console.log("again click")
    magic = 0
  }
})