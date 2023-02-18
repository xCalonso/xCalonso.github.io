var rangeInput = document.getElementById("range-input")
var rangeValue = document.getElementById("range-value")

rangeInput.addEventListener("input", function(){
    rangeValue.innerText = "1" + rangeInput.value
}, false)