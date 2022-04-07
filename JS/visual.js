//Get screen elements
let display = document.getElementById('display')
let oneVhOnThisScreen = document.getElementsByTagName("html")[0].clientHeight / 100;
let cssMode = document.getElementById("cssMode")
//let pageTitle = document.getElementById("title")
//let previousCardBtn = document.getElementById("previousCard")
//let cardName = document.getElementById("cardName")
//let nextCardBtn = document.getElementById("nextCard")
//let cardPicture = document.getElementById("cardPicture")
//let cardNumber = document.getElementById("cardNumber")
//let playerNumber = document.getElementById("playerNumber")
//let cardDescription = document.getElementById("cardDescription")
//let cardClass = document.getElementById("cardClass")
//let cardTeamName = document.getElementById("cardTeamName")
//let cardTeamLogo = document.getElementById("cardTeamLogo")

//Stat data
//let cardStrength = document.getElementById("cardStrength")
//let cardDexterity = document.getElementById("cardDexterity")
//let cardAgility = document.getElementById("cardAgility")
//let cardStamina = document.getElementById("cardStamina")
//let cardInteligence = document.getElementById("cardInteligence")

//Stat bars
//let cardStrengthBar = document.getElementById("cardStrengthBar")
//let cardDexterityBar = document.getElementById("cardDexterityBar")
//let cardAgilityBar = document.getElementById("cardAgilityBar")
//let cardInteligenceBar = document.getElementById("cardInteligenceBar")
//let cardStaminaBar = document.getElementById("cardStaminaBar")

//Logos
let homeLogo = document.getElementById("homeLogo")
let cardsLogo = document.getElementById("cardsLogo")
let searchLogo = document.getElementById("searchLogo")
let themeLogo = document.getElementById("themeLogo")
let previousCardLogo = document.getElementById("previousCardLogo")
let nextCardLogo = document.getElementById("nextCardLogo")
let cardStrengthLogo = document.getElementById("cardStrengthLogo")
let cardDexterityLogo = document.getElementById("cardDexterityLogo")
let cardAgilityLogo = document.getElementById("cardAgilityLogo")
let cardInteligenceLogo = document.getElementById("cardInteligenceLogo")
let cardStaminaLogo = document.getElementById("cardStaminaLogo")

window.onscroll = function() {scrollFunction()};
let mode = "L"
let modeFolder = "Light Mode"

//startUp()

function startUp() {
    homeLogo.setAttribute("src", "./CARDS/LOGOS/UI/" + modeFolder + "/Home.png")
    cardsLogo.setAttribute("src", "./CARDS/LOGOS/UI/" + modeFolder + "/Cards.png")
    searchLogo.setAttribute("src", "./CARDS/LOGOS/UI/" + modeFolder + "/Search.png")
    themeLogo.setAttribute("src", "./CARDS/LOGOS/UI/" + modeFolder + "/Theme.png")
    try {
        previousCardLogo.setAttribute("src", "./CARDS/LOGOS/UI/" + modeFolder + "/Previous_Card.png")
        nextCardLogo.setAttribute("src", "./CARDS/LOGOS/UI/" + modeFolder + "/Next_Card.png")
        cardStrengthLogo.setAttribute("src", "./CARDS/LOGOS/UI/" + modeFolder + "/Strength.png")
        cardDexterityLogo.setAttribute("src", "./CARDS/LOGOS/UI/" + modeFolder + "/Dexterity.png")
        cardAgilityLogo.setAttribute("src", "./CARDS/LOGOS/UI/" + modeFolder + "/Agility.png")
        cardInteligenceLogo.setAttribute("src", "./CARDS/LOGOS/UI/" + modeFolder + "/Inteligence.png")
        cardStaminaLogo.setAttribute("src", "./CARDS/LOGOS/UI/" + modeFolder + "/Stamina.png")
    } catch (error) {
        console.log(error)
    }
}

function themeChange(){
    if (mode == "L") {
        cssMode.setAttribute("href", "./CSS/MODES/darkMode.css")
        modeFolder = "Dark Mode"
        mode = "D"
    }
    else {
        cssMode.setAttribute("href", "./CSS/MODES/lightMode.css")
        modeFolder = "Light Mode"
        mode = "L"
    }

    //Create new card team logo image
    if (newCard[7] == "--" || newCard[7] == "Associção Paulista de Quadribol") {
        cardTeamLogo.removeChild(cardTeamLogo.children[0])
        let newCardTeamLogo = document.createElement('img')
        newCardTeamLogo.setAttribute("src", "./CARDS/LOGOS/UI/" + modeFolder + "/APQ.png");
        newCardTeamLogo.setAttribute("title", newCard[7]);
        newCardTeamLogo.setAttribute("alt", newCard[7]);
        newCardTeamLogo.setAttribute("caption", newCard[2]);
        cardTeamLogo.appendChild(newCardTeamLogo)
    }
    startUp()
}

function scrollFunction() {
    if (document.body.scrollTop > oneVhOnThisScreen || document.documentElement.scrollTop > oneVhOnThisScreen) {
        document.getElementById("header").style.height = "7vh";
        document.getElementById("main").style.marginTop = "9vh";
    } else {
        if (document.getElementsByTagName("html")[0].clientWidth < 600) {
            document.getElementById("header").style.height = "7vh";
            document.getElementById("main").style.marginTop = "7vh";
        }
        else {
            document.getElementById("header").style.height = "10vh";
            document.getElementById("main").style.marginTop = "12vh";
        }
    }
}