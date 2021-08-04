const createTowers = (id) =>{
    let container = document.querySelector('main')
    let newElement = document.createElement('section')
    newElement.classList.add('columns')
    newElement.id=id
    container.appendChild(newElement)

}

const createDiscs = (id) =>{
    let container = document.querySelector('#column1')
    let newElement = document.createElement('div')
    newElement.id=id
    container.appendChild(newElement)
}

createTowers("column1")
createTowers("column2")
createTowers("column3")
createDiscs("disc4")
createDiscs("disc3")
createDiscs("disc2")
createDiscs("disc1")

const disc1 = document.querySelector('#disc1')
const disc2 = document.querySelector('#disc2')
const disc3 = document.querySelector('#disc3')
const disc4 = document.querySelector('#disc4')
const column1 = document.querySelector('#column1')
const column2 = document.querySelector('#column2')
const column3 = document.querySelector('#column3')
const holder = document.querySelector('#holder')
const play = document.querySelector('#play-again')
const win = document.querySelector('#win')
const invalid = document.querySelector('#invalid-movement')
const container = document.querySelectorAll(".columns")
let victory = false
const backgroundMusic = document.getElementById('backgroundSound')
const iniciar = document.querySelector('#botaoIniciar')
const intro = document.querySelector('#intro')
const textIntro = document.getElementById('text-intro')

backgroundMusic.volume = 0.1




let i = 0
let txt = 'Era uma vez uma princesa muito serelepe, chamada Sebastiana. Ela vivia em paz em seu reino, até que um dia despertou a fúria do poderoso dragão Shruikan. Agora Sebastiana está em apuros! Ajude-a a fugir do dragão movendo seu castelo para outro lugar!'
let speed = 50

function typeWriter() {
  if (i < txt.length) {
    textIntro.innerHTML += txt.charAt(i)
    i++
    setTimeout(typeWriter, speed)
  }
}

typeWriter()

iniciar.addEventListener('click', function(){
    intro.classList.add('hidden')
})




const verifyMovement = (e) => {
    if (holder.lastChild == disc2){
        if (e.currentTarget.lastElementChild == disc1){
            return false
        }
    }
    if (holder.lastChild == disc3){
        if (e.currentTarget.lastElementChild == disc1){
            return false
        }
        if (e.currentTarget.lastElementChild == disc2){
            return false
        }
    }
    if (holder.lastChild == disc4){
        if (e.currentTarget.lastElementChild == disc3){
            return false
        }
        if (e.currentTarget.lastElementChild == disc2){
            return false
        }
        if (e.currentTarget.lastElementChild == disc1){
            return false
        }
    }
    return true
}

let count = 0

const verifyVictory = () => {
    
    if (column2.contains(disc4) || column3.contains(disc4)){
        count++
    }
    if (count > 0){
        if (column1.contains(disc1) && column1.contains(disc2) && column1.contains(disc3) && column1.contains(disc4)){
            win.classList.remove('hidden')
            victory = true
        }
        if (column2.contains(disc1) && column2.contains(disc2) && column2.contains(disc3) && column2.contains(disc4)){
            win.classList.remove('hidden')
            victory = true

        }
        if (column3.contains(disc1) && column3.contains(disc2) && column3.contains(disc3) && column3.contains(disc4)){
            win.classList.remove('hidden')
            victory = true

        }
    }
}

const shadeOut = element =>{
    element.classList.add("shadeOutAnimation")
    setTimeout(() => {
        element.classList.remove("shadeOutAnimation")
    }, 500);
    
}

const shadeIn = element =>{
    element.classList.add("shadeInAnimation")
    setTimeout(() => {
        element.classList.remove("shadeInAnimation")
    }, 500);
}

play.addEventListener("click", function() {
    count = 0
    moveCount = 0 
    victory = false
    column1.appendChild(disc4)
    column1.appendChild(disc3)
    column1.appendChild(disc2)
    column1.appendChild(disc1)
    win.classList.add('hidden')
    invalid.classList.add('hidden')
    let moveCounter = document.getElementById('moveCountSpan')
    moveCounter.innerHTML =  moveCount
});

let moveCount = 0
const getDiscOut = element => {
    backgroundMusic.play()
    let holder = document.getElementById("holder")
    let disc = element.currentTarget.lastElementChild

    if(!victory){

        if(holder.childElementCount === 0 || moveCount === 0){
            holder.appendChild(disc)
            moveCount++
        }
        else if (verifyMovement(element) && !victory){
            element.currentTarget.appendChild(holder.lastElementChild)
            invalid.classList.add('hidden')
            let moveCounter = document.getElementById('moveCountSpan')
            shadeOut(moveCounter)
            setTimeout(() => {
                moveCounter.innerText =  moveCount
                shadeIn(moveCounter)
            }, 500);
            
            
            
        }
        else{
            let errorSound = document.getElementById('errorSound')
            errorSound.volume = 0.5
            errorSound.play()
            
            invalid.classList.remove('hidden')
            invalid.classList.add('invalidAnimation')
            setTimeout(() =>invalid.classList.remove('invalidAnimation'), 750)
            
        }
        
    }

    
}

let containerArray = [...container].map( e => {
    e.addEventListener("click", getDiscOut)
    e.addEventListener('click', verifyVictory)
})
