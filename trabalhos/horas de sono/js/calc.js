let hours = document.querySelector('#hours').value
let i = new Date
let verify = document.querySelector('#verify')
let res = document.querySelector('.res')

verify.addEventListener('click', () => {
    let int = parseInt(hours)
    let H = int - i.getHours() 

    if (H >= 7) {
        res.innerHTML = `Você vai dormir ${H} Horas, Vejo que é um vagabundo.`
    } else if(H < 7) {
        res.innerHTML = `Se Fudeu, só vai dormir ${H} Horas, pelo menos não é um vagabundo.`
    }
})