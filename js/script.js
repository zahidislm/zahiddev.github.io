TweenLite.lagSmoothing(250, 16);

var landAnimation = new TimelineLite();
landAnimation.progress(1).progress(0);

var growCurve = BezierEasing(0.4, 0.0, 0.2, 1);
var easeIn = BezierEasing(0.0, 0.0, 0.2, 1);
var easeOut = BezierEasing(0.4, 0.0, 1, 1);

function typeAnimate() {
    landAnimation.to("#i-am", 0.4, {
        scaleX: 1,
        scaleY: 1,
        ease: new Ease(growCurve),
        onComplete: function() {
            $(".adj-list").typed({
                strings: ["INNOVATING", "LEADING", "DEVELOPING", "LEARNING", "SIMPLIFYING",
                    "BEING COMPETITIVE", "DESIGNING", "ARCHERY", "TECHNOLOGY", "OPEN SOURCE", "AI",
                    "HAVING FUN", "CODE", "HBO SHOWS", "ESPORTS", "COFFEE", "MOONSHOTS", "NETWORKING"
                ],
                showCursor: false,
                typeSpeed: 65,
                startDelay: 300,
                backDelay: 2500,
                loop: true
            });
        }
    });
}


$(document).ready(function() {

    landAnimation.to("#logo", 0.8, {
        css: {
            opacity: "0"
        },
        ease: new Ease(growCurve)
    }, "+=0.75")

    .to(".bg-layer", 0.8, {
        css: {
            border: "0.75em solid white"
        },
        ease: new Ease(growCurve)
    })

    .to(".text-logo", 0.5, {
        scaleX: 1,
        scaleY: 1,
        ease: new Ease(growCurve)
    }, "+=0.25");

    if (!jQuery.browser.mobile) {
        landAnimation.to("#page-bar", 0.5, {
            css: {
                top: "89%"
            },
            ease: new Ease(easeIn)
        }, "-=0.5");
    }

    typeAnimate();
});

if (jQuery.browser.mobile) {
    document.swipe({
        swipeStatus: function(event, phase, direction, distance, fingerCount) {
            if (direction !== "DOWN")
                return false;
        }
    });
} else {
    document.ontouchstart = function(e) {
        e.preventDefault();
    };
}


if (!jQuery.browser.mobile) {
    var navAnimation = new TimelineLite();
    navAnimation.progress(1).progress(0);
    var pageAnimation = new TimelineLite();
    pageAnimation.progress(1).progress(0);

    function buttonDelay(button, page) {
        if ($('#page-bar div').hasClass('button-clicked z-depth-1')) {
            $('#page-bar div').removeClass('button-clicked z-depth-1');
            $(button).toggleClass('button-clicked z-depth-1');
        } else {
            $(button).addClass('button-clicked z-depth-1');
        }

        if ($('.content-container div').hasClass('visible')) {
            $('.content-container div').removeClass('visible');
            $(page).toggleClass('visible');
        } else {
            $(page).addClass('visible');
        }

        if (!$(".content-container").hasClass('active')) {
            navAnimation.to(".content-container", 0.3, {
                yPercent: -120,
                z: 0.01,
                rotationZ: 0.01,
                force3d: true,
                ease: new Ease(easeOut),
                onComplete: function() {
                    $(".content-container").addClass("active");
                }
            });
        }
    }

    function closePanel() {
        $("#page-bar div").removeClass("button-clicked z-depth-1");
        navAnimation.to(".content-container", 0.5, {
            xPercent: 150,
            z: 0.1,
            rotationZ: 0.01,
            force3d: true,
            ease: new Ease(easeIn),
            onComplete: function() {
                $(".content-container").removeClass("active");
            }
        })

        .to(".content-container", 0.01, {
            yPercent: 100
        })

        .to(".content-container", 0.01, {
            xPercent: 0,
            onComplete: function() {
                navAnimation.clear();
            }
        });
    }

    $(document).mouseup(function(e) {
        var container = $(".content-container");
        var pageButton = $(".page-button");
        $("#close").on("click", function() {
            closePanel();
        });

        if ((!container.is(e.target) && container.has(e.target).length === 0) && (!pageButton.is(e.target) &&
                pageButton.has(e.target).length === 0) && (container.hasClass("active"))) {
            closePanel();
        }
    });
}
