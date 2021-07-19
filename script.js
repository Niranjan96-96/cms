const toggleButton=document.getElementsByClassName('toggle-button')[0]
const content=document.getElementsByClassName('content')[0]
toggleButton.addEventListener('click',()=>{
    contentLinks.classList.toggle('active')
})