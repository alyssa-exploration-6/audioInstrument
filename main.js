
// find my test button              const testButton = document.getElementById("test-button");
// find my key test button          const key = document.getElementById("key-test");



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




// This is the instrument ------------------------ //

// const snapSound = new Audio("sounds/Asnap.mp3");


const starSounds = {
    q: {
    sound: "sounds/q.wav",
    star: "star-q"
    },

    w: {
    sound: "sounds/w.wav",
    star: "star-w"
    },

    e: {
    sound: "sounds/e.wav",
    star: "star-e"
    },

    r: {
    sound: "sounds/r.wav",
    star: "star-r"
    },

    t: {
    sound: "sounds/t.wav",
    star: "star-t"
    },

    y: {
    sound: "sounds/y.wav",
    star: "star-y"
    },

    u: {
    sound: "sounds/u.wav",
    star: "star-u"
    },

    i: {
    sound: "sounds/i.wav",
    star: "star-i"
    },

    o: {
    sound: "sounds/o.wav",
    star: "star-o"
    },

    p: {
    sound: "sounds/p.wav",
    star: "star-p"
    },
};

document.addEventListener("keydown", (event) => {

    const key = event.key.toLowerCase();

    if (!starSounds[key]) return;

    // play sound
    const audio = new Audio(starSounds[key].sound);
    audio.play();

    // finding the star
    const star = document.getElementById(starSounds[key].star);

    // flashing star
    star.classList.add("star-active");

    setTimeout(() => {
    star.classList.remove("star-active");
    }, 500);

});


// two different areas for imporvement, 1. the aesthetic & visuals 2. randomness.
// create 3 branches for each improvement, meaning total 6 branches.


const starMap = {
q: document.getElementById("star-q"),
w: document.getElementById("star-w"),
e: document.getElementById("star-e"),
r: document.getElementById("star-r"),
t: document.getElementById("star-t"),
y: document.getElementById("star-y"),
u: document.getElementById("star-u"),
i: document.getElementById("star-i"),
o: document.getElementById("star-o"),
p: document.getElementById("star-p")
};



