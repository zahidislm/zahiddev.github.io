var landAnimation = new TimelineLite();
var growCurve = BezierEasing(0.4, 0.0, 0.2, 1);
var easeIn = BezierEasing(0.0, 0.0, 0.2, 1);
var easeOut = BezierEasing(0.4, 0.0, 1, 1);

function typeAnimate() {
    landAnimation.to("#i-am", 0.4, {
        scaleX: 1,
        scaleY: 1,
        ease: new Ease(growCurve),
        onComplete: function () {
            $(".adj-list").typed({
                strings: ["INNOVATOR", "LEADER", "DEVELOPER", "TEAM PLAYER", "LEARNER",
                    "THINKER"
                ],
                showCursor: false,
                typeSpeed: 75,
                startDelay: 300,
                backDelay: 2500,
                loop: true
            });
        }
    });
}


$(document).ready(function () {

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


if (!jQuery.browser.mobile) {
    var navAnimation = new TimelineLite();
    var pageAnimation = new TimelineLite();

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

        setTimeout(function () {
            if (!$(".content-container").hasClass('active')) {
                navAnimation.to(".content-container", 0.2, {
                    z: 0.01,
                    rotationZ: 0.01,
                    css: {
                        top: "2em"
                    },
                    ease: new Ease(easeOut),
                    force3d: true,
                    onComplete: function () {
                        $(".content-container").addClass("active");
                    }
                });
            }
        }, 250);
    }

    function closePanel() {
        $("#page-bar div").removeClass("button-clicked z-depth-1");
        navAnimation.to(".content-container", 0.5, {
            css: {
                left: "150%"
            },
            z: 0.1,
            rotationZ: 0.01,
            ease: new Ease(easeIn),
            force3d: true,
            onComplete: function () {
                $(".content-container").removeClass("active");
            }
        })

        .to(".content-container", 0.01, {
            css: {
                top: "51.5em"
            }
        })

        .to(".content-container", 0.01, {
            css: {
                left: "50%",
            },
            onComplete: function () {
                navAnimation.clear();
            }
        });
    }

    $(document).mouseup(function (e) {
        var container = $(".content-container");
        var pageButton = $(".page-button");
        $("#close").on("click", function () {
            closePanel();
        });

        if ((!container.is(e.target) && container.has(e.target).length === 0) && (!pageButton.is(e.target) &&
                pageButton.has(e.target).length === 0) && (container.hasClass("active"))) {
            closePanel();
        }
    });

    var iconHoverAnimation = new TimelineLite();
    var hoverIcon;

    function iconHover(icon, state) {
        if (state == "on")
            hoverIcon = 'url("imgs/social/' + icon + '_h.png")';
        else
            hoverIcon = 'url("imgs/social/' + icon + '.png")';

        iconHoverAnimation.to("#" + icon, 0, {
            css: {
                content: hoverIcon
            },
            ease: new Ease(growCurve)
        });
    }

    var socialButton = $(".social-bar img");
    var socialType;
    socialButton.hover(function () {
        socialType = $(this).attr("id");
        iconHover(socialType, "on");
    }, function () {
        iconHover(socialType, "off");
    });
}
