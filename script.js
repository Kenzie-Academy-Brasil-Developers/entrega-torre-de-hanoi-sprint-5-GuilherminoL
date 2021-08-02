

const disc1 = document.querySelector('#disc1')
const disc2 = document.querySelector('#disc2')
const disc3 = document.querySelector('#disc3')
const disc4 = document.querySelector('#disc4')
const column1 = document.querySelector('#column1')
const column2 = document.querySelector('#column2')
const column3 = document.querySelector('#column3')
const holder = document.querySelector('#holder')

let discNumber1 = document.querySelector('#disc1').getAttribute('data-number')

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
let win = document.querySelector('#win')

const verifyVictory = () => {
    
    if (column2.contains(disc4) || column3.contains(disc4)){
        count++
    }
    if (count > 0){
        if (column1.contains(disc1) && column1.contains(disc2) && column1.contains(disc3) && column1.contains(disc4)){
            win.innerHTML = 'You win!'
        }
        if (column2.contains(disc1) && column2.contains(disc2) && column2.contains(disc3) && column2.contains(disc4)){
            win.innerHTML = 'You win!'
        }
        if (column3.contains(disc1) && column3.contains(disc2) && column3.contains(disc3) && column3.contains(disc4)){
            win.innerHTML = 'You win!'
        }
    }
}

let container = document.querySelectorAll("section")
let containerArray = [...container].map( e => {
    // e.addEventListener('click', verifyMovement)
    e.addEventListener("click", getDiscOut)
    e.addEventListener('click', verifyVictory)
})