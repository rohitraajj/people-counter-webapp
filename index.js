
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function increment(){
    count = count+1
    countEl.textContent = count
    
}
function save(){
    let countPeople = count + " - "
    saveEl.textContent += countPeople
    count = 0
    countEl.textContent = count
}