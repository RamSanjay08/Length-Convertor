let inchbtn = document.querySelector(".inch-btn")
let abc = document.querySelector(".main-container h1");
let meterbtn = document.querySelector(".meter-btn");


inchbtn.addEventListener('click' ,
function () {
  const cmVal = Number(document.getElementById("input").value)
  const inchVal = cmVal/2.54
 abc.textContent=inchVal.toFixed(3)
  }
)

meterbtn.addEventListener('click' ,
function () {
  const cmVal = Number(document.getElementById("input").value)
  const meterVal = cmVal*0.01
  abc.textContent = meterVal
  }
)
// console.log(document.querySelector(".main-container h1").textContent);
