let nav = document.querySelector('.nav')
let id = document.querySelector('.in')

nav.addEventListener('click', () => {
    if (id.classList.contains('deactivate')) {
        id.style.transform = 'translateX(100%)'
    
        id.classList.toggle('active')
    } else {
        id.style.transform = 'translateX(0)'
    
        id.classList.toggle('deactivate')
    }
})