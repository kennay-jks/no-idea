let down = document.querySelectorAll('.down')

window.addEventListener('load', () => {
    down.forEach((down) => {
        down.classList.add('float')
    })
})

down.forEach((rdown) => {
    rdown.addEventListener('click', function() {
        let sections = document.querySelectorAll('section')
    
        let nextSection = null
        let currentScroll = window.pageYOffset
    
        for (let i = 0; i < sections.length; i++) {
            let section = sections[i]
            let sectionTop = section.offsetTop
            
            if (sectionTop > currentScroll) {
            nextSection = section
            break
            }
        }
    
        if (nextSection) {
            let scrollTop = nextSection.offsetTop
            
            window.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
            })
        }
    })    
})
