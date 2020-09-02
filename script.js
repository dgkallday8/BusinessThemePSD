const slides = document.querySelectorAll('.slide')
const points = document.querySelectorAll('.point')

let index = 0

const activeSlide = ind => {
    for (let slide of slides) {
        slide.classList.remove('active')
    }
    slides[ind].classList.add('active')
}
const activePoint = ind => {
    for (let point of points) {
        point.classList.remove('active')
    }
    points[ind].classList.add('active')
}

const nextSlide = () => {
    if (index === slides.length - 1) {
        index = 0
        activeSlide(index)
        activePoint(index)
    } else {
        index++
        activePoint(index)
        activeSlide(index)
    }
}

const prevSlide = () => {
    if (index === 0) {
        index = slides.length - 1
        activeSlide(index)
        activePoint(index)
    } else {
        index--
        activePoint(index)
        activeSlide(index)
    }
}
const int = setInterval(nextSlide, 2500)
points.forEach((item, indexPoint) => {
    item.addEventListener('click', () => {
        clearInterval(int)
        index = indexPoint
        activePoint(index)
        activeSlide(index)
        console.log(indexPoint)
    })
})

