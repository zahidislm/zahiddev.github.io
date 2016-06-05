function typeAnimate() {
    $(".about-peek").typed({
        strings: ["Undergraduate student at York University studying Machine Learning and Artificial Intelligence. <br /> Android development hobbyist, concept developer for Deep Learning Neural Networks, and UI designer."],
        typeSpeed: -10,
        callback: function() {
            $(".adj-list").typed({
                strings: ["INNOVATOR", "LEADER", "DEVELOPER", "TEAM PLAYER", "LEARNER", "THINKER"],
                showCursor: false,
                typeSpeed: 75,
                backDelay: 2500,
                loop: true
            });
        }
    });
}

function buttonDelay(URL) {
    setTimeout(function() {
        window.location = URL;
    }, 700);
}

$(document).ready(function() {
    var landAnimation = new TimelineLite();

    landAnimation.to("#landing", 0.8, {
            css: {
                border: "0.75em solid white"
            },
            ease: Sine.easeOut
        })
        .to("#logo", 0.8, {
            scaleX: 1,
            scaleY: 1,
            rotation: 360,
            ease: Sine.easeOut
        }, "+=0.3")
        .to("#logo", 0.5, {
            className: "z-depth-1",
            ease: Sine.easeOut
        })
        .to(".text-logo", 0.5, {
            scaleX: 1,
            scaleY: 1,
            ease: Sine.easeOut
        }, "+= 0.2")
        .to("#page-bar", 0.5, {
            css: {
                marginTop: "6.5em"
            },
            ease: Sine.easeOut
        })
        .to("#peek", 0.4, {
            scaleX: 1,
            scaleY: 1,
            ease: Sine.easeOut,
            onComplete: typeAnimate
        }, "+= 0.3")
        .to("#i-am", 0.4, {
            scaleX: 1,
            scaleY: 1,
            ease: Sine.easeOut
        }, "+= 6.6");

});
