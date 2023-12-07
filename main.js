// ----- NavScroll -----
let nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    nav.classList.toggle('nav-scroll', window.scrollY > 0);
});

// ----- Active toggle ----
let allNavLinkA = document.querySelectorAll('.nav-links li a');

// ----- Active add ----
allNavLinkA.forEach(item => {
    item.addEventListener('click', () => {
        removeActive();
        item.classList.add('active');
    })
});

// ----- Active remove ----
const removeActive = () => allNavLinkA.forEach(item => {
    item.classList.remove('active')
});

// ----- Nav Links Toggler----
let menuBars = document.querySelector('nav button');
let navLinks = document.querySelector('.nav-links');
menuBars.addEventListener('click', () => {
    navLinks.classList.toggle('.nav-link-block');
});

// Animation sur competences :


$(document).ready(function(){

    $(".item_image_text h3").lettering();

    $(".item_image_text h3 span").css("opacity", "0");
    $(".item_image .img").hide().removeClass("imgActive");

    // hover condition
    $(".item_name li a").hover(function(){

        // if

        $(".item_name li a").removeClass("active");
        $(this).addClass("active");

        var activeLinkId = $(this).attr("href");
        console.log(activeLinkId);

        $(".item_image .img").hide().removeClass("imgActive");
        $(".item_image .img#"+activeLinkId).show().addClass("imgActive");

        $(".item_image_text h3 span").css("opacity", "1");


        // gsap animation
        var tl = gsap.timeline();

        tl.from(".img.imgActive .item_image_text h3 span", {
            y: 30,
            x: 50,
            opacity: 0,
            stagger: .1
        });


    }, function(){

        // else
    });
});



// Gsap Section: About

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".about-left", {
    scale:0.82,
    autoAlpha:0,
    x:"-100%"
}, {
    scale:1,
    autoAlpha:1,
    duration:1,
    x:0,
    scrollTrigger: {
        trigger:".about-left",
        start:"bottom bottom",
        end:"center center",
        scrub:1
    }
}
)


gsap.utils.toArray(".about-right span").forEach((span) => {
    gsap.fromTo(span, {
        letterSpacing: "10px",
        autoAlpha:0,
        x:300,
        skewX:65,
    },{
        letterSpacing:"0",
        autoAlpha:1,
        w:0,
        skewX:0,
        duration:1,
        scrollTrigger: {
            trigger: span,
            scrub:1,
            start: 'bottom bottom',
            end: 'center center',
        }
    }
    
    )
})





let animation = document.querySelectorAll('.animation');

function showScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (let i = 0; i < animation.length; i++) {
        let heightAnimation = animation[i].offsetHeight;
        if(heightAnimation - -450 < scrollTop) {
            animation[i].style.opacity = 1;
            animation[i].classList.add("showUp")
        }
    }
}
window.addEventListener("scroll", showScroll);

// ----- Animation Section  About, image ----
let w = 30;
let h = 30;

function pixel() {
    for( var i = 0; i<h; i++) {
        for( var j = 0; j<w; j++){
            let span = document.createElement('span');
            document.getElementById('pixel').appendChild(span);
            span.style.left = j * 10 + 'px';
            span.style.top = i * 10 + 'px';
            span.style.backgroundPosition = -j*10 + 'px ' + -i*10 + 'px, center';
        }
    }
}