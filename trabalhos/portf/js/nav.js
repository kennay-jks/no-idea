let nav = document.querySelector('.nav')
let id = document.querySelector('.in')

nav.addEventListener('click', () => {
    if (id.classList.contains('active')) {
        id.classList.remove('active')
        id.classList.add('dea')
        // icon
        nav.classList.remove('active')
        nav.classList.add('dea')
        //console.log('dea')
    } else {
        id.classList.remove('dea')
        id.classList.add('active')
        // icon
        nav.classList.remove('dea')
        nav.classList.add('active')
        //console.log('act')
    }
})