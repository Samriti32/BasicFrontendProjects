
let box =document.querySelector(".circle")
let body = document.querySelector("body");
let btns= document.querySelectorAll(".btn");

for(btn of btns){
   btn.addEventListener("click", changecolor);
}
function changecolor(event){
    console.log("Button is clicked")
    let color= event.target.id;
    box.style.backgroundColor= color;

}
   