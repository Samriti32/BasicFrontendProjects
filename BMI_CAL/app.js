let w = document.querySelector("#Weight");
let h = document.querySelector("#Height");
let btn = document.querySelector(".btn");

btn.addEventListener("click", calBMI);

function calBMI(){
    let BMI = (w.value/(h.value*h.value) ).toFixed(2);
    alert(BMI)
    console.log(BMI)
}

