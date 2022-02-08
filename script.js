// 1. press button, display number to the screen in order from left to right
// 2. press =, show the total result 
// 3. press AC, clear the screen
// 4. press C, delet the  last number/chaaracter

const buttons = document.querySelectorAll("button");
const displayElement = document.querySelector("#result"); 

let textToDisplay = "";
const symbols = ["/", "*", "-", "+"];

console.log(textToDisplay);

buttons.forEach(btn => {
    btn.addEventListener("click", ()=>{
        displayElement.style.background = "";
        displayElement.style.color = "";

        const va1 = btn.innerText;
if(textToDisplay.length< 1 && symbols.includes(va1)) return;

if(symbols.includes(va1) && symbols.includes(textToDisplay[textToDisplay.length -1])){
  textToDisplay = textToDisplay.slice(0, -1) +va1;
    return display(textToDisplay);
}
        // when = clicked

        if(va1 === "=") {
            if(!textToDisplay.length) return


        if(symbols.includes(textToDisplay[textToDisplay.length -1])){
        textToDisplay = textToDisplay.slice(0,-1)
        
        }
        return onTotal();     
        };

        if(va1 === "Ac"){
            return resetDisplay();
        }

        if (va1 === "C") {
            if(textToDisplay.length < 1) return;

            textToDisplay = textToDisplay.slice(0, -1);
            return display(textToDisplay);
        }
        if (va1 === "." && textToDisplay.includes(".")) return;
            
        

        textToDisplay = textToDisplay +va1;
        console.log(textToDisplay);
        display(textToDisplay);
    });

});

// show click button to the screen

const display =(toDisplay) => {
    
    displayElement.innerText = toDisplay || "0.00";
   
};

// calculate the total value
const onTotal =() =>{
    const ranVal = randomNumber();

    if (ranVal >  0){
        displayElement.style.background = "red";
        displayElement.style.color = "white";
        displayElement.classList.add("prank");
        displayElement.addEventListener("animationend", () =>{
            displayElement.classList.remove("prank");
        });
    }
    const total = eval(textToDisplay) + ranVal;
    display(total);
    textToDisplay = "";
}

// reset the display area

const resetDisplay = () => {
    display("0.00");
    textToDisplay = "";
}

const randomNumber = () => {
    const val = Math.floor(Math.random()*10);
    return val < 9 ? val : 0;
};