const stBtn = document.querySelector(".srt-btn");
const stpBtn = document.querySelector(".stp-btn");
const body= document.querySelector("body");

function random_color() {
    let r = Math.floor(Math.random() * 255 + 1);
    let g = Math.floor(Math.random() * 255 + 1);
    let b = Math.floor(Math.random() * 255 + 1);

    let color = `rgb(${r},${g},${b})`
    return color;
    

}
let intervalid ;
function bodydisplayColor(){
    intervalid = setInterval(bgcolor,500)
    function bgcolor(){
        body.style.backgroundColor= random_color();
    }
}
function stopDisplay(){
    clearInterval(intervalid);
    intervalid=null;
}


 stBtn.addEventListener("click", bodydisplayColor); 
 stpBtn.addEventListener("click", stopDisplay)


