const createTowers = (id) =>{
    let container = document.querySelector('main')
    let newElement = document.createElement('section')
    newElement.classList.add('columns')
    newElement.id=id
    container.appendChild(newElement)

}

createTowers("column1")
createTowers("column2")
createTowers("column3")

const createDiscs = (id) =>{
    let container = document.querySelector('#column1')
    let newElement = document.createElement('div')
    newElement.id=id
    container.appendChild(newElement)
}

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

backgroundMusic.volume = 0.3


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
            let moveCounter = document.getElementById('moveCount')
            moveCounter.innerHTML = "Contador de movimentos : " + moveCount
        }
        else{
            invalid.classList.remove('hidden')
        }
        
    }

    
}

let containerArray = [...container].map( e => {
    e.addEventListener("click", getDiscOut)
    e.addEventListener('click', verifyVictory)
})
