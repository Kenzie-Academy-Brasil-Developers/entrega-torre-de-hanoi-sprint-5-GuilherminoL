
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

const verifyMovement = (e) => {
    console.log(e.currentTarget)
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
        }
        if (column2.contains(disc1) && column2.contains(disc2) && column2.contains(disc3) && column2.contains(disc4)){
            win.classList.remove('hidden')
        }
        if (column3.contains(disc1) && column3.contains(disc2) && column3.contains(disc3) && column3.contains(disc4)){
            win.classList.remove('hidden')
        }
    }
}

play.addEventListener("click", function() {
    column1.appendChild(disc4)
    column1.appendChild(disc3)
    column1.appendChild(disc2)
    column1.appendChild(disc1)
    win.classList.add('hidden')
    invalid.classList.add('hidden')
});

let moveCount = 0
const getDiscOut = element => {
    let holder = document.getElementById("holder")
    let disc = element.currentTarget.lastElementChild
    if(holder.childElementCount === 0 || moveCount === 0){
        holder.appendChild(disc)
        moveCount++
    }
    else if (verifyMovement(element)){
        element.currentTarget.appendChild(holder.lastElementChild)
        invalid.classList.add('hidden')
    }
    else{
        invalid.classList.remove('hidden')
    }
    
}

let containerArray = [...container].map( e => {
    e.addEventListener("click", getDiscOut)
    e.addEventListener('click', verifyVictory)
})
