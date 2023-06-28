let con = document.querySelectorAll('.conte')
let sob = document.querySelectorAll('.sobre')
let view = document.querySelector('.view')

view.addEventListener('click', () => {
    con.forEach((con) => {
        con.classList.add('active')
    })
    sob.forEach((sob) => {
        sob.classList.add('active')
    })
})

down.forEach((rdown) => {
    rdown.addEventListener('click', () => {
        con.forEach((con) => {
            con.classList.remove('active')
        })
        sob.forEach((sob) => {
            sob.classList.remove('active')
        })
    })    
})