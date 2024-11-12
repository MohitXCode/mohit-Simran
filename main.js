// Trigger to play music in the background with SweetAlert
window.addEventListener('load', () => {
    Swal.fire({
        title: '🎶 Let the Music Play! 🎶',
        text: 'Simran ',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#FF4081', // A bright pink color
        cancelButtonColor: '#FF5722', // A vibrant orange
        confirmButtonText: 'Absolutely! 🎉',
        cancelButtonText: 'No, thank you! 🙅‍♀️',
        backdrop: `rgba(0,0,123,0.4)`, // Dark blue backdrop with transparency
        allowOutsideClick: false, // Prevent closing when clicking outside
    }).then((result) => {
        // If the user confirms, play the music and trigger the animation
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            animationTimeline();
        } else {
            // If the user cancels, just trigger the animation
            animationTimeline();
        }
    });
});

const animationTimeline = () => {
    // split chars that needs to be animated individually
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    };

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    };

    // timeline
    const tl = new TimelineMax();

    tl.to(".container", 0.3, { visibility: "visible" })
      .from(".one", 0.4, { opacity: 0, y: 10 })
      .from(".two", 0.2, { opacity: 0, y: 10 })
      .to(".one", 0.4, { opacity: 0, y: 10 }, "+=1.5")
      .to(".two", 0.4, { opacity: 0, y: 10 }, "-=0.5")
      .from(".three", 0.4, { opacity: 0, y: 10 })
      .to(".three", 0.4, { opacity: 0, y: 10 }, "+=1.5")
      .from(".four", 0.4, { scale: 0.2, opacity: 0 })
      .from(".fake-btn", 0.2, { scale: 0.2, opacity: 0 })
      .staggerTo(".hbd-chatbox span", 0.5, { visibility: "visible" }, 0.02)
      .to(".fake-btn", 0.1, { backgroundColor: "rgb(127, 206, 248)" }, "+=2")
      .to(".four", 0.3, { scale: 0.2, opacity: 0, y: -100 }, "+=0.5")
      .from(".idea-1", 0.4, ideaTextTrans)
      .to(".idea-1", 0.4, ideaTextTransLeave, "+=1.5")
      .from(".idea-2", 0.4, ideaTextTrans)
      .to(".idea-2", 0.4, ideaTextTransLeave, "+=1.5")
      .from(".idea-3", 0.4, ideaTextTrans)
      .to(".idea-3 strong", 0.3, { scale: 1.2, x: 10, backgroundColor: "rgb(21, 161, 237)", color: "#fff" })
      .to(".idea-3", 0.4, ideaTextTransLeave, "+=1.5")
      .from(".idea-4", 0.4, ideaTextTrans)
      .to(".idea-4", 0.4, ideaTextTransLeave, "+=1.5")
      .from(".idea-5", 0.4, { rotationX: 15, rotationZ: -10, skewY: "-5deg", y: 50, z: 10, opacity: 0 })
      .to(".idea-5 span", 0.5, { rotation: 90, x: 8 }, "+=0.7")
      .to(".idea-5", 0.4, { scale: 0.2, opacity: 0 }, "+=1")
      .staggerFrom(".idea-6 span", 0.5, { scale: 3, opacity: 0, rotation: 15, ease: Expo.easeOut }, 0.1)
      .staggerTo(".idea-6 span", 0.5, { scale: 3, opacity: 0, rotation: -15, ease: Expo.easeOut }, 0.1, "+=1")
      .staggerFromTo(".baloons img", 1.5, { opacity: 0.9, y: 800 }, { opacity: 1, y: -500 }, 0.1)
      .from(".profile-picture", 0.3, { scale: 2, opacity: 0, x: 15, y: -15, rotationZ: -45 }, "-=1")
      .from(".hat", 0.3, { x: -50, y: 200, rotation: -180, opacity: 0 })
      .staggerFrom(".wish-hbd span", 0.5, { opacity: 0, y: -20, rotation: 150, skewX: "30deg", ease: Elastic.easeOut.config(1, 0.5) }, 0.05)
      .staggerFromTo(".wish-hbd span", 0.5, { scale: 1.2, rotationY: 150 }, { scale: 1, rotationY: 0, color: "#ff69b4", ease: Expo.easeOut }, 0.05, "party")
      .from(".wish h5", 0.3, { opacity: 0, y: 5, skewX: "-10deg" }, "party")
      .staggerTo(".eight svg", 1, { visibility: "visible", opacity: 0, scale: 60, repeat: 2, repeatDelay: 0.8 }, 0.15)
      .to(".six", 0.3, { opacity: 0, y: 15, zIndex: "-1" })
      .staggerFrom(".nine p", 0.5, ideaTextTrans, 0.6)
      .to(".last-smile", 0.3, { rotation: 90 }, "+=0.5");

    // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
        tl.restart();
    });
}
