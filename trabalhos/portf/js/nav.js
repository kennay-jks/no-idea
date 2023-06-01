let nav = document.querySelector('.nav')
let id = document.querySelector('.in')

nav.addEventListener('click', () => {
    if (id.classList.contains('active')) {
        id.classList.remove('active')
        id.classList.add('dea')
        //console.log('dea')
    } else {
        id.classList.remove('dea')
        id.classList.add('active')
        //console.log('act')
    }
})