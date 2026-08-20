const leftarrow = document.querySelector('.left-arrow')
const rightarrow = document.querySelector('.right-arrow')
const track = document.querySelector('.trust-slide')
const card = document.querySelectorAll('.cards')

let index = 0;
const total = card.length;

function slide() {
    track.style.transform = `translateX(-${index * 100}%)`;
}
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 20){
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled')
    }
})
document.addEventListener('click', (e) => {
    const left_arrow = e.target.closest('.leftarrow')
    const right_arrow = e.target.closest('.rightarrow')
    if (!left_arrow && !right_arrow) {
        return
    }
    if (!right_arrow) {
        if (index > 0) {
            index--;
        } else {
            index = total - 1
        }        
    }
    if (!left_arrow) {
        if (index < total - 1) {
            index++;
            console.log(index)
        } else {
            index = 0;
        }        
    }
    slide();
})
rightarrow.addEventListener('click', () => {
    console.log(track)
    if (index < total - 1) {
        index++;
        console.log(index)
    } else {
        index = 0;
    }        
    slide();
})

leftarrow.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = total - 1
    }        
    slide();
})