let images = [
    "dice-six-faces-one.svg",
    "dice-six-faces-two.svg",
    "dice-six-faces-three.svg",
    "dice-six-faces-four.svg",
    "dice-six-faces-five.svg",
    "dice-six-faces-six.svg"];

let dice = document.querySelectorAll("img");

console.log(dice);

function roll(){
    dice.forEach((die)=> {
        die.classList.add("shake");
    });

    setTimeout(()=>{
        dice.forEach((die)=> {
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6);
        let dieTwoValue = Math.floor(Math.random()*6);

        console.log(dieOneValue, dieTwoValue);

        document.querySelector("#die-one").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-two").setAttribute("src", images[dieTwoValue]);

        let total = dieOneValue + dieTwoValue + 2;

        document.getElementById("total").textContent = "Total = " + total;


    },1000)
}