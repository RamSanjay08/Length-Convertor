function convert() {
const cmVal = Number(document.getElementById("input").value)
const inchVal = cmVal/2.34
const result = document.getElementById("result")
result.innerHTML = inchVal.toFixed(3) + " inches"
}

