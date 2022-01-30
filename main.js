btn=document.querySelector('.btn')
modal=document.querySelector('.modal')
closebtn=document.getElementById('close-btn')
console.log(modal)
btn.addEventListener('click',openMpdal)
closebtn.addEventListener('click',closedModal)
window.addEventListener('click',modals)

function openMpdal(){
    modal.style.display='block'
}


function closedModal(){
    modal.style.display='none'
}
function modals(e){
    if(e.target===modal){
        modal.style.display='none'
    }
    console.log("click")
  

    
}