let message = document.getElementById("message");
let cardsText = document.getElementById("cards");
let sumText = document.getElementById("sum");
let startBtn = document.getElementById("start-btn");
let drawBtn = document.getElementById("draw-btn");
const cardValues = [];
let sum = 0

function startGame(){
    if(cardValues.length==0){
        cardValues.push(addCard())
        cardValues.push(addCard()) 
        update()
    }
}

function drawNew(){
    if(!(sum>21)){
        cardValues.push(addCard())
        update()
    }
    
}

function renderGame(){
    if(sum > 21){
        message.innerText = "out."
    }else if(sum == 21){
        message.innerText = "Blackjack."
    }else{
        message.innerText = "you may draw."
    }
}

function update(){
    cardCounter()
    cardsText.innerText = "cards: " + cardValues
    sumText.innerText = "sum: " + sum
    renderGame()
}

function addCard(){
    let notSorted = randomNumber()
    let newCard
    if(notSorted == 1){
        newCard = "A"
    }else if(notSorted == 11){
        newCard = "J"
    }else if(notSorted == 12){
        newCard = "Q"
    }else if(notSorted == 13){
        newCard = "K"
    }else{
        newCard = notSorted
    }
    return newCard
}

function randomNumber(){
//returns a number from 1-13
return Math.floor((Math.random() * 12 + 1));
}

function cardCounter(){
//updates the sum 
    sum = 0

    let justInts = []
    

    for(let i = 0; i < cardValues.length; i++){
        if(cardValues[i] == "A"){
            justInts.push(11)
        }else if(cardValues[i] == "J" || cardValues[i] == "Q" || cardValues[i] == "K"){
            justInts.push(10)
        }else{
            justInts.push(cardValues[i])
        }
        
    }

    for(let i = 0; i <justInts.length; i++){
        sum += justInts[i]
    }
}


startBtn.addEventListener("click", startGame)
drawBtn.addEventListener("click", drawNew)

