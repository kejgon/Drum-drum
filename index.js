


let drumBtn = document.querySelectorAll('button')

function handleClick() {
    let btnSoundsInnerHTML = this.innerHTML;
    makeSound(btnSoundsInnerHTML)
    btnAnimations(btnSoundsInnerHTML)

}

// with for Loop
for (let i = 0; i < drumBtn.length; i++) {
    drumBtn[i].addEventListener('click', handleClick)
}

document.addEventListener('keypress', function (even) {
    makeSound(even.key)
    btnAnimations(even.key)

})


function makeSound(btnkey) {

    switch (btnkey) {
        case 'w':
            let crashaudio = new Audio('sounds/crash.mp3')
            crashaudio.play()
            break;
        case 'a':
            let kickaudio = new Audio('sounds/kick-bass.mp3')
            kickaudio.play()
            break;
        case 's':
            let snareaudio = new Audio('sounds/snare.mp3')
            snareaudio.play()
            break;
        case 'd':
            let tom1audio = new Audio('sounds/tom-1.mp3')
            tom1audio.play()
            break;
        case 'j':
            let tom2audio = new Audio('sounds/tom-2.mp3')
            tom2audio.play()
            break;
        case 'k':
            let tom3audio = new Audio('sounds/tom-3.mp3')
            tom3audio.play()
            break;
        case 'l':
            let tom4audio = new Audio('sounds/tom-4.mp3')
            tom4audio.play()
            break;

        default: console.log(btnSoundsInnerHTML)
            break;
    }


}

function btnAnimations(currentKey) {
    let activeBtn = document.querySelector('.' + currentKey);
    activeBtn.classList.add('pressed')

    setTimeout(function () {
        activeBtn.classList.remove('pressed')
    })
}

