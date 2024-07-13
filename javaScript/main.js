//Header text//
const headerElement = document.querySelector("#header1");
const subHeaderElement = document.querySelector("#header2")

console.log(headerElement.classList); //h1
function typingEffect(element, speed)
{
    const text = element.innerText.split("");

    element.innerText = "";

    text.forEach((character, index) => {
        setTimeout(() => { // loop is repeating whatever the speed variable is set to.
            element.innerHTML += character; // adds each character from the element one at a time to the inner header text.
        }, index * speed);
        
    });
}

typingEffect(headerElement, 200); 

if (subHeaderElement !== null) //for the h2//
{
    typingEffect(subHeaderElement, 200);
}

const words = ["designer", "developer", "creative"];
let currentIndex = 0;
const dynamicTextElement = document.getElementById("dynamic-text");

function updateText() {
    dynamicTextElement.textContent = words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length;
}

setInterval(updateText, 6000); // Match the duration of the CSS animation cycle
window.onload = updateText;
