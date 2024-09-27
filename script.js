
const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const yourChoice = document.querySelector('.your-choice')
const machineChoice = document.querySelector('.machine-choice')


let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman =(humanChoice)=>{
playTheGame(humanChoice,playMachine())
}

const playMachine = ()=>{
    const choices=['rock','paper','scissors']
   const randomNumber = Math.floor(Math.random() *3)

    return choices[randomNumber]
}


const playTheGame =(human, machine)=>{
console.log('humano: '+ human + ' Máquina: ' + machine )

yourChoice.innerHTML= `Você escolheu ${human}`
machineChoice. innerHTML = `A máquina escolheu ${machine}`

if(human === machine){
result.innerHTML= "Deu empate"

}else if((human=== 'rock' && machine=== 'scissors')|| (human=== 'paper' && machine=== 'rock')||(human=== 'scissors' && machine=== 'paper')){

    result.innerHTML= "Você ganhou"
   humanScoreNumber++
   humanScore.innerHTML=humanScoreNumber
}else{
    result.innerHTML= "Você perdeu"
    machineScoreNumber++
    machineScore.innerHTML= machineScoreNumber
}

}
