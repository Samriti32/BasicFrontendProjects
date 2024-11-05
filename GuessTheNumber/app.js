let RandNumber = Math.floor(Math.random() * 100);
let usrInp = document.querySelector("#guess");
let pg = document.querySelector(".pg")
let arrofguess = [];
let guessRem = document.querySelector(".remGuess")
 let ans = document.querySelector(".ans")
let btn = document.querySelector(".Submit");


btn.addEventListener("click", verifyResult);

function verifyResult(event) {
    event.preventDefault()
    let userguess = parseInt(usrInp.value)
    if (isNaN(userguess) && userguess == " " && userguess < 1 && userguess > 100) {
        console.log("Enter Right Value")
    }

    if (RandNumber === userguess) {
        alert("You guessed right number");
        console.log(userguess)

    } else (
        console.log("Wrong Answer")
    )
    arrofguess.push(userguess);
    let remLen = 10 - arrofguess.length;
    guessRem.innerText = `Guess Remaining ${remLen}`
    pg.innerText = `Previous Guesses:- ${arrofguess}`;

    if(remLen===0){
        ans.innerText= `Oops Better Luck Next Time : Correct Answer is ${RandNumber}`;
    }
}
