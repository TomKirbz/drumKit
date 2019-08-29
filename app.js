// Play drum by keyboard press
const sound = new Audio();

document.addEventListener("keypress", event => {
     
    switch(event.key){
        case "a":
            sound.src = './sounds/clap.wav'
            sound.play()
 
        break;
 
        case "s":
                sound.src = './sounds/hihat.wav'
                sound.play()
 
        break;
 
        case "d":
                sound.src = './sounds/kick.wav'
                sound.play()
 
        break;
 
        case "f":
                sound.src = './sounds/openhat.wav'
                sound.play()
 
        break;
 
        case "g":
                sound.src = './sounds/boom.wav'
                sound.play()
 
        break;
 
        case "h":
                sound.src = './sounds/ride.wav'
                sound.play()
 
        break;
 
        case "j":
                sound.src = './sounds/snare.wav'
                sound.play()
 
        break;
 
        case "k":
                sound.src = './sounds/tom.wav'
                sound.play()
 
        break;
 
        case "l":
                sound.src = './sounds/tink.wav'
                sound.play()
 
        break;
    }

})


 



// Play music by mouse click

document.getElementById("sound-button-a").addEventListener("click", () => {
        sound.src = './sounds/clap.wav'; 
        sound.play()
})

document.getElementById("sound-button-s").addEventListener("click", () => {
        sound.src = './sounds/hihat.wav'; 
        sound.play()
})

document.getElementById("sound-button-d").addEventListener("click", () => {
        sound.src = './sounds/kick.wav'; 
        sound.play()
})

document.getElementById("sound-button-f").addEventListener("click", () => {
        sound.src = './sounds/openhat.wav'; 
        sound.play()
})

document.getElementById("sound-button-g").addEventListener("click", () => {
        sound.src = './sounds/boom.wav'; 
        sound.play()
})

document.getElementById("sound-button-h").addEventListener("click", () => {
        sound.src = './sounds/ride.wav'; 
        sound.play()
})

document.getElementById("sound-button-j").addEventListener("click", () => {
        sound.src = './sounds/snare.wav'; 
        sound.play()
})

document.getElementById("sound-button-k").addEventListener("click", () => {
        sound.src = './sounds/tom.wav'; 
        sound.play()
})

document.getElementById("sound-button-l").addEventListener("click", () => {
        sound.src = './sounds/tink.wav'; 
        sound.play()
})


