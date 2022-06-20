console.log("HELLO PAPA PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM

window.onload = () => {
    let randomNumber = 0

    let pickRandomNumber = () => {
        randomNumber = Math.floor(Math.random() * 100)+1
        // console.log(randomNumber)
    }

    pickRandomNumber()
    

    const subBut = document.getElementById('submit-number')
    function getGuess(e) {
        e.preventDefault()
        console.log(randomNumber)
        let guess = document.getElementById('num-input')
        let userGuess = guess.value
        console.log(userGuess)
        if(userGuess == randomNumber){
            console.log('in')
            document.getElementById('correct').style.display = 'block'
        } else{
            document.getElementById('guess-list').append(userGuess + ',')
        }
    } 
    subBut.addEventListener('click', getGuess)
}
