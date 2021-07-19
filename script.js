const toggleButton=document.getElementsByClassName('toggle-button')[0]
const content=document.getElementsByClassName('content')[0]
toggleButton.addEventListener('click',()=>{
    content.classList.toggle('active')
})