const newArrivalBtn= document.querySelector('#newArrivalBtn');
const saleSeasonBtn= document.querySelector("#saleSeasonBtn");
const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector(".modal-container");
const toggleBackDrop=()=>{

    backdrop.classList.toggle('visible')
    modalCancel()
}
const modalCancel=()=>{
    modal.classList.remove('visible')
}
const displayModal=()=>{
    modal.classList.add('visible')
}
const btnHandler=()=>{
    toggleBackDrop();
    displayModal();
}
backdrop.addEventListener('click',toggleBackDrop)
newArrivalBtn.addEventListener('click',btnHandler)
saleSeasonBtn.addEventListener('click',btnHandler)