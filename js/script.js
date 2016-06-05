if (jQuery.browser.mobile) {
    $("#page-bar").hide();
    $(".content-container").hide();
}

var landAnimation = new TimelineLite();

function typeAnimate() {
    $(".about-peek").typed({
        strings: ["Undergraduate student at York University studying Machine Learning and Artificial Intelligence. <br /> Android development hobbyist, concept developer for Deep Learning Neural Networks, and UI designer."],
        typeSpeed: -10,
        callback: function() {
            landAnimation.to("#i-am", 0.4, {
                scaleX: 1,
                scaleY: 1,
                ease: Sine.easeOut,
                onComplete: function() {
                    $(".adj-list").typed({
                        strings: ["INNOVATOR", "LEADER", "DEVELOPER", "TEAM PLAYER", "LEARNER", "THINKER"],
                        showCursor: false,
                        typeSpeed: 75,
                        startDelay: 300,
                        backDelay: 2500,
                        loop: true
                    });
                }
            });
        }
    });
}

$(document).ready(function() {

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
        }, "+=0.25")
        .to("#logo", 0.5, {
            className: "z-depth-1",
            ease: Sine.easeOut
        })
        .to(".text-logo", 0.5, {
            scaleX: 1,
            scaleY: 1,
            ease: Sine.easeOut
        });

    if (!jQuery.browser.mobile) {
        landAnimation.to("#page-bar", 0.5, {
            css: {
                marginTop: "6.5em"
            },
            ease: Sine.easeOut
        });
    }

    landAnimation.to("#peek", 0.4, {
        scaleX: 1,
        scaleY: 1,
        ease: Sine.easeOut,
        onComplete: typeAnimate
    }, "+= 0.3");
});

if (!jQuery.browser.mobile) {
    var navAnimation = new TimelineLite();

    function buttonDelay(URL) {
        if (URL == "#about-me") {
            $(".content").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis est vitae ipsum mattis blandit. Integer quis elit lectus. Cras ac porta nibh. Vestibulum accumsan tincidunt semper. Morbi aliquet sapien a placerat fringilla. Aliquam posuere condimentum orci sagittis suscipit. Nam pharetra vestibulum rutrum. Aenean quis velit laoreet, porttitor tortor eget, pharetra leo. Vestibulum enim leo, elementum sit amet bibendum vehicula, finibus non massa. Nullam sed porta orci. Duis a tortor et dolor interdum vulputate. Quisque ultrices commodo metus, at interdum velit luctus et. Curabitur a venenatis enim. Sed venenatis nisi nec massa hendrerit, quis convallis felis dapibus.");
        } else if (URL == "#contact-me") {
            $(".content").text(" A bridge approves a sunrise noble. My bush bulletin crawls. Opposite the neighbor barks a spiral packet. Without a rear talks a rhetorical sufferer. The cheerful anagram fulfills the subway. A magazine chooses the stuff. The commentary suspects outside the shout! An adverse jelly results outside the native politician. How will the twist choose? Below an artist thinks the message.");
        }

        setTimeout(function() {
            navAnimation.to(".content-container", 0.5, {
                css: {
                    top: "2em"
                },
                ease: Power2.easeOut
            });
        }, 500);
    }

    $(document).mouseup(function(e) {
        var container = $(".content-container");
        var pageButton = $(".page-button");

        if ((!container.is(e.target) && container.has(e.target).length === 0) && (!pageButton.is(e.target) && pageButton.has(e.target).length === 0)) {
            navAnimation.to(container, 0.5, {
                css: {
                    top: "50em"
                },
                ease: Power2.easeIn
            });
        }
    });
}
