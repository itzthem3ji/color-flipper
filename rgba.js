
const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener("click", function () {  
  let rgbaColor = [];  
  for (let i = 0; i < 1; i++){
    rgbaColor.push(randomRgbaString(1));
  }
  // console.log(rgbaColor);  
  color.textContent = rgbaColor;  
  document.body.style.backgroundColor = rgbaColor;
});

function randomRgbaString (alpha) {
  let r = Math.floor(Math.random() * 255)
  let g = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)
  let a = alpha
  return `rgba(${r},${g},${b},${a})`
}
