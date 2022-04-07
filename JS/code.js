//Get screen elements
let pageTitle = document.getElementById("title")
let previousCardBtn = document.getElementById("previousCard")
let cardName = document.getElementById("cardName")
let nextCardBtn = document.getElementById("nextCard")
let cardPicture = document.getElementById("cardPicture")
let cardNumber = document.getElementById("cardNumber")
let playerNumber = document.getElementById("playerNumber")
let cardDescription = document.getElementById("cardDescription")
let cardClass = document.getElementById("cardClass")
let cardTeamName = document.getElementById("cardTeamName")
let cardTeamLogo = document.getElementById("cardTeamLogo")

//Stat data
let cardStrength = document.getElementById("cardStrength")
let cardDexterity = document.getElementById("cardDexterity")
let cardAgility = document.getElementById("cardAgility")
let cardStamina = document.getElementById("cardStamina")
let cardInteligence = document.getElementById("cardInteligence")

//Stat bars
let cardStrengthBar = document.getElementById("cardStrengthBar")
let cardDexterityBar = document.getElementById("cardDexterityBar")
let cardAgilityBar = document.getElementById("cardAgilityBar")
let cardInteligenceBar = document.getElementById("cardInteligenceBar")
let cardStaminaBar = document.getElementById("cardStaminaBar")

let newCard = eval('getCard001()')

startUp()

//Call in the previousCard
function previousCard() {
    if((parseInt(newCard[3]) - 1) <= 0) {
        return;
    }

    let aux = ""
    if (parseInt(newCard[3]) <= 10) {
        aux = "00"
    }
    if (parseInt(newCard[3]) > 10 && parseInt(newCard[3]) <= 100) {
        aux = "0"
    }
    newCard = eval('getCard' + aux + (parseInt(newCard[3]) - 1) + "()")

    renderNewCard()
}

//Call in the nextCard
function nextCard() {
    if((parseInt(newCard[3]) + 1) >= 138) {
        return;
    }

    let aux = ""
    if (parseInt(newCard[3]) < 9) {
        aux = "00"
    }
    if (parseInt(newCard[3]) >= 9 && parseInt(newCard[3]) < 99) {
        aux = "0"
    }
    newCard = eval('getCard' + aux + (parseInt(newCard[3]) + 1) + "()")

    renderNewCard()
}

function renderNewCard() {
    //Disable card buttons if it is the first or last card
    if((parseInt(newCard[3]) - 1) <= 0) {
        previousCardBtn.style.pointerEvents = "none"
        previousCardBtn.style.opacity = "0.5"
    }
    else {
        previousCardBtn.style.pointerEvents = "auto"
        previousCardBtn.style.opacity = "1"
    }

    if((parseInt(newCard[3]) + 1) >= 138) {
        nextCardBtn.style.pointerEvents = "none"
        nextCardBtn.style.opacity = "0.5"
    }
    else {
        nextCardBtn.style.pointerEvents = "auto"
        nextCardBtn.style.opacity = "1"
    }

    //Stat Bar calc
    let aux
    let colors = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
    for (let i = 9; i < 14; i++) {
        aux = parseInt(newCard[i]) * 1.9
        switch (true) {
            case aux <= 10:
                colors[i] = "rgb(255, 0, 0)"
                break;
            case aux > 10 && aux <= 20:
                colors[i] = "rgb(255, 132, 0)"
                break;
            case aux > 20 && aux <= 30:
                colors[i] = "rgb(255, 187, 0)"
                break;
            case aux > 30 && aux <= 40:
                colors[i] = "rgb(255, 230, 0)"
                break;
            case aux > 40 && aux <= 50:
                colors[i] = "rgb(187, 255, 0)"
                break;
            case aux > 50 && aux <= 60:
                colors[i] = "rgb(132, 255, 0)"
                break;
            case aux > 60 && aux <= 70:
                colors[i] = "rgb(0, 255, 4)"
                break;
            case aux > 70 && aux <= 80:
                colors[i] = "rgb(0, 255, 85)"
                break;
            case aux > 80 && aux <= 90:
                colors[i] = "rgb(0, 255, 85)"
                break;
            case aux > 90:
                colors[i] = "rgb(0, 255, 195)"
                break;
            default:
                break;
        }
    }

    //Clean previous values
    pageTitle.removeChild(pageTitle.firstChild)
    cardName.removeChild(cardName.firstChild)
    cardPicture.removeChild(cardPicture.children[1])
    cardNumber.removeChild(cardNumber.firstChild)
    playerNumber.removeChild(playerNumber.firstChild)
    cardDescription.removeChild(cardDescription.firstChild)
    cardClass.removeChild(cardClass.firstChild)
    cardTeamName.removeChild(cardTeamName.firstChild)
    cardTeamLogo.removeChild(cardTeamLogo.children[1])
    cardStrength.removeChild(cardStrength.firstChild)
    cardDexterity.removeChild(cardDexterity.firstChild)
    cardAgility.removeChild(cardAgility.firstChild)
    cardInteligence.removeChild(cardInteligence.firstChild)
    cardStamina.removeChild(cardStamina.firstChild)

    //Create new card image
    let newCardPicture = document.createElement('img')
    newCardPicture.setAttribute("id", "cardImg")
    newCardPicture.setAttribute("src", newCard[1]);
    newCardPicture.setAttribute("title", newCard[0]);
    newCardPicture.setAttribute("alt", newCard[0]);
    newCardPicture.setAttribute("caption", newCard[2]);

    //Create new card team logo image
    let newCardTeamLogo = document.createElement('img')

    //Check for different themes in APQ's logo
    if (newCard[7] == "--" || newCard[7] == "Associção Paulista de Quadribol") {
        newCardTeamLogo.setAttribute("src", "./CARDS/LOGOS/UI/" + modeFolder + "/APQ.png");
    }
    else {
        newCardTeamLogo.setAttribute("src", newCard[8]);
    }
    newCardTeamLogo.setAttribute("id", "teamLogo")
    newCardTeamLogo.setAttribute("title", newCard[7]);
    newCardTeamLogo.setAttribute("alt", newCard[7]);
    newCardTeamLogo.setAttribute("caption", newCard[2]);

    //Insert new data
    pageTitle.appendChild(document.createTextNode(newCard[0] + " - Paulistão Battle Cards"))
    cardName.appendChild(document.createTextNode(newCard[0])) 
    cardPicture.appendChild(newCardPicture)
    cardNumber.appendChild(document.createTextNode(newCard[3]))
    playerNumber.appendChild(document.createTextNode(newCard[4]))
    cardDescription.appendChild(document.createTextNode(newCard[5]))
    cardClass.appendChild(document.createTextNode(newCard[6]))
    cardTeamName.appendChild(document.createTextNode(newCard[7]))
    cardTeamLogo.appendChild(newCardTeamLogo)
    cardStrength.appendChild(document.createTextNode(newCard[9]))
    cardDexterity.appendChild(document.createTextNode(newCard[10]))
    cardAgility.appendChild(document.createTextNode(newCard[11]))
    cardInteligence.appendChild(document.createTextNode(newCard[12]))
    cardStamina.appendChild(document.createTextNode(newCard[13]))

    //Make the stat bars black in case the card is not a playable card
    if (newCard[9] == "--") {
        cardStrengthBar.style.width = "100%"
        cardStrengthBar.style.backgroundColor = "black"
    }
    else {
        cardStrengthBar.style.width = parseInt(newCard[9]) * 1.9 + "%"
        cardStrengthBar.style.backgroundColor = colors[9]
    }
    if (newCard[10] == "--") {
        cardDexterityBar.style.width = "100%"
        cardDexterityBar.style.backgroundColor = "black"
    }
    else {
        cardDexterityBar.style.width = parseInt(newCard[10]) * 1.9 + "%"
        cardDexterityBar.style.backgroundColor = colors[10]
    }
    if (newCard[11] == "--") {
        cardAgilityBar.style.width = "100%"
        cardAgilityBar.style.backgroundColor = "black"
    }
    else {
        cardAgilityBar.style.width = parseInt(newCard[11]) * 1.9 + "%"
        cardAgilityBar.style.backgroundColor = colors[11]
    }
    if (newCard[12] == "--") {
        cardInteligenceBar.style.width = "100%"
        cardInteligenceBar.style.backgroundColor = "black"
    }
    else {
        cardInteligenceBar.style.width = parseInt(newCard[12]) * 1.9 + "%"
        cardInteligenceBar.style.backgroundColor = colors[12]
    }
    if (newCard[13] == "--") {
        cardStaminaBar.style.width = "100%"
        cardStaminaBar.style.backgroundColor = "black"
    }
    else {
        cardStaminaBar.style.width = parseInt(newCard[13]) * 1.9 + "%"
        cardStaminaBar.style.backgroundColor = colors[13]
    }
}