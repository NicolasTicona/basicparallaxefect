window.onload = () => {
    
    var image = document.querySelector('.image-background')

    window.addEventListener('scroll', (e) => {
        let scroll = window.scrollY 
        console.log(scroll);

        image.style.backgroundPositionY = `-${scroll/2}px`
    })
}