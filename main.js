

// find our intro modal
const introModal = document.getElementById("intro-modal");
// console.log(introModal);

// find modal close button
const introModalCloseButton = document.getElementById("intro-modal-close");


// show modal on page load
introModal.showModal();

// when OK clicked, modal closes
introModalCloseButton.addEventListener("click", function closeIntroModal(){    
// closes modal     
introModal.close();     
});



// -------- INSTRUMENT -------------

const ocean = document.getElementById("ocean");



const jellyfishMap = {
    q: {
    image: "img/j1.png",
    sound: "sounds/1.wav"
    },

    w: {
    image: "img/j2.png",
    sound: "sounds/2.wav"
    },

    e: {
    image: "img/j3.png",
    sound: "sounds/3.wav"
    },

    r: {
    image: "img/j4.png",
    sound: "sounds/4.wav"
    },

    t: {
    image: "img/j5.png",
    sound: "sounds/5.wav"
    },

    y: {
    image: "img/j6.png",
    sound: "sounds/6.wav"
    },

    u: {
    image: "img/j7.png",
    sound: "sounds/7.wav"
    },

    i: {
    image: "img/j8.png",
    sound: "sounds/8.wav"
    },

    o: {
    image: "img/j9.png",
    sound: "sounds/9.wav"
    },

    p: {
    image: "img/j10.png",
    sound: "sounds/10.wav"
    }

};

function createJellyfish(keyData) {
    const jelly = document.createElement("img");
    jelly.src = keyData.image;
    jelly.classList.add("jellyfish");

// create random position
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);

    jelly.style.left = x + "px";
    jelly.style.top = y + "px";

    ocean.appendChild(jelly);

// play sound every 2 seconds
    const interval = setInterval(() => {
        const sound = new Audio(keyData.sound);
        sound.play();
    }, 4000);

// remove jellyfish after 8 seconds
    setTimeout(() => {
        clearInterval(interval);

        jelly.remove();

    }, 7600);

function createShootingStar() {
    const star = document.createElement("img");

    star.src = "img/shooting-star.png";
    star.classList.add("shooting-star");

    // Random starting position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight / 2);

    star.style.left = x + "px";
    star.style.top = y + "px";

    ocean.appendChild(star);

    // Remove star after animation
    setTimeout(() => {
        star.remove();
    }, 1500);
}
};


document.addEventListener("keydown", function(event) {

    const key = event.key.toLowerCase();
    if (!jellyfishMap[key]) {
        return;
    }

// playing the audio files & creating jellyfish img
    const sound = new Audio(jellyfishMap[key].sound);
    sound.play();
    createJellyfish(jellyfishMap[key]);

// Random chance of shooting star
if (Math.random() < 0.3) {
    createShootingStar();
}
});