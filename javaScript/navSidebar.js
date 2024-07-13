// Navigation Toggle
const hamburger = document.querySelector(".primary-nav__hamburger");
const navMenu = document.getElementsByClassName("primary-nav");
const navButtons = document.getElementsByTagName("ul");
const navLogo = document.getElementsByClassName("primary-nav__logo");
const navSocials = document.getElementsByClassName("primary-nav__socials");
const navContact = document.getElementById("primary-nav__contact");
const navPortfolio = document.getElementById("primary-nav__portfolio");
const btnHamburger = document.getElementById("btn__hamburger");
let isToggled = document.getElementsByClassName(".ishidden_nav");
console.log(btnHamburger.classList); // undefined ???
isToggled = false;

let screenWidth = window.screen.width;

if (screenWidth <= 992) // Inital check of screenwidth on page load
{
    navMenu[0].style.width = "0";
    navMenu[0].style.borderRight = "transparent";
    navLogo[0].style.display = "none";
    navButtons[0].style.display = "none";
    navSocials[0].style.display = "none";
}
else
{
    navMenu[0].style.width = "15rem";
    navMenu[0].style.borderRight = "0.5rem solid #185ad4";
    navLogo[0].style.display = "flex";
    navButtons[0].style.display = "block";
    navSocials[0].style.display = "flex";
}

window.onresize = function() { // Check of screenwidth on window resize
    let screenWidth = window.screen.width;
    //console.log(screenWidth);

    if (screenWidth <= 992 && btnHamburger.classList.contains("inactive"))
    {
        isToggled = false;
        console.log("screenwidth small");
        navMenu[0].style.width = "0";
        navMenu[0].style.borderRight = "transparent";
        navLogo[0].style.display = "none";
        navButtons[0].style.display = "none";
        navSocials[0].style.display = "none";

        function closeMenu() {
            isToggled = false;
       
        }
    }
    else
    {
        isToggled = true;
        console.log("screenwidth large");
        navMenu[0].style.width = "15rem";
        navMenu[0].style.borderRight = "0.5rem solid #185ad4";
        navLogo[0].style.display = "flex";
        navButtons[0].style.display = "block";
        navSocials[0].style.display = "flex";
    }
    return screenWidth;
};

hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    
    if (btnHamburger.classList.contains("inactive"))
    {
        btnHamburger.classList.add("hamburger-spin");
        btnHamburger.classList.add("active");
        btnHamburger.classList.remove("inactive");
        btnHamburger.classList.remove("hamburger-spin-backwards");
    }
    else if (btnHamburger.classList.contains("active"))
    {
        btnHamburger.classList.add("hamburger-spin-backwards");
        btnHamburger.classList.add("inactive");
        btnHamburger.classList.remove("hamburger-spin");
        btnHamburger.classList.remove("active");
    }
    //hamburger.classList.toggle("hamburger-spin");
    console.log(hamburger);
    if (isToggled) { // When mobile viewer CANNOT see nav menu
        isToggled = false;
        navMenu[0].style.width = "0";
        navMenu[0].style.borderRight = "transparent";
        navLogo[0].style.display = "none";
        navButtons[0].style.display = "none";
        navSocials[0].style.display = "none";
    }
    else 
    {
        isToggled = true;
        navMenu[0].style.width = "15rem";
        navMenu[0].style.borderRight = "0.5rem solid #185ad4";
        navLogo[0].style.display = "flex";
        navButtons[0].style.display = "block";
        navSocials[0].style.display = "flex";
        console.log(navLogo);
        
    }
}


if (navContact || navPortfolio !== null) // prevents errors on webpages that don't have these elements
{
    navContact.addEventListener("click", closeMenu);
    navPortfolio.addEventListener("click", closeMenu);
}


function closeMenu() {
    let screenWidth = window.screen.width;
    console.log(screenWidth + "from closeMenu function");

    isToggled = false;
    navMenu[0].style.width = "0";
    navMenu[0].style.borderRight = "transparent";
    navLogo[0].style.display = "none";
    navButtons[0].style.display = "none";
    navSocials[0].style.display = "none";

    if (screenWidth > 992)
    {
        isToggled = true;
        navMenu[0].style.width = "15rem";
        navMenu[0].style.borderRight = "0.5rem solid #185ad4";
        navLogo[0].style.display = "flex";
        navButtons[0].style.display = "block";
        navSocials[0].style.display = "flex";
    }
    
}


