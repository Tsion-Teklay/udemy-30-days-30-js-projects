const colorDisplaySection = document.getElementById("color-display")
const newColorButton = document.getElementById("new-color-button")
const CurrentColorElement = document.getElementById("current-color")


const hexvalues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

function getRandomHexValue(){
    const randomIndexPosition = Math.floor(Math.random()*hexvalues.length)
    const randomHexValue = hexvalues[randomIndexPosition]
    return randomHexValue
 }

function getRandomHexString(stringLength){
    let hexString = ''
    for(let i=0; i<stringLength; i++){
        hexString+= getRandomHexValue()
    }
    return hexString
}


newColorButton.addEventListener("click", function(){
    const randomHexString = '#' + getRandomHexString(6)
    document.body.style.setProperty('background-color', randomHexString)
    CurrentColorElement.textContent = randomHexString
    colorDisplaySection.style.borderColor = randomHexString
})