let moveCount = 0
const getDiscOut = element => {
    let holder = document.getElementById("holder")
    let disc = element.currentTarget.lastElementChild
    if(holder.childElementCount === 0 || moveCount === 0){
        holder.appendChild(disc)
        moveCount++
    }
    else {
        element.currentTarget.appendChild(holder.lastElementChild)
    }
    
}

let container = document.querySelectorAll("section")
let containerArray = [...container].map( e => {
    e.addEventListener("click", getDiscOut)
})
