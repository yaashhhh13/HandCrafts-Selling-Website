function locojspen(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locojspen()



// document.querySelector("#nav1 a").addEventListener("mouseenter",function(){
//     gsap.to("#nav1 a::before",{
//         left: "0%"
//     })
// })



// LOADING ANIMATION


var tl = gsap.timeline()

function counter(){
    var loadingtext = document.querySelector("#counter h1");
    var load = 0;
    var int = setInterval(() => {
     load = load + 1;
     if(load>99){
        clearInterval(int)
        console.log(load)
     }
     loadingtext.innerHTML = load
}, 50)
}
counter()



gsap.to(".load-line-fill",{
    width: "100%",
    duration: 6
})

tl.to(".load-letter",{
    y: 800,
    delay: 5.5,
    duration: 1.5
})

tl.to("#load-anim",{
    scale: 0,
    duration: .5,
    onStart: function(){
        document.querySelector("#product-img").style.zIndex = "9999999"
    }
})

tl.from("#p1-head h1",{
    scale: 0,
    duration: 1.5
})

tl.from("#page1>p",{
    opacity: 0
})

tl.from("#nav",{
    opacity: 0
})

tl.from("#product-img",{
    scale: 0
})




document.querySelector(".imgs").addEventListener("mouseenter",function(){
    gsap.to("#p1-head",{
        opacity: 0
    })
    gsap.to("#page1>p",{
        opacity: 0
    })
    gsap.to("#nav",{
        opacity: 0
    })
    document.querySelectorAll(".img").forEach(function(anim){
        gsap.to(anim,{
            animationName: "img",
            opacity: 1
        })
    })
    console.log("heyy")
})

document.querySelector(".imgs").addEventListener("mouseleave",function(){    
    document.querySelectorAll(".img").forEach(function(anim){
        gsap.to(anim,{
            animationName: "im",
            opacity: 0,
            duration: .001
        })
    })
    gsap.to("#p1-head",{
        opacity: 1,
        delay: .3

    })
    gsap.to("#page1>p",{
        opacity: 1,
        delay: .3 
    })
    gsap.to("#nav",{
        opacity: 1,
        delay: .3 
    })
})

gsap.to(".scroll",{
    left: "-190%",
    scrollTrigger:{
        trigger: "#page",
        scroller: "#main",
        start: "top top",
        pin: true,
        scrub: 1,
        // markers: true
    }
})

gsap.to("#page>svg>circle",{
    strokeDashoffset: "1",
    scrollTrigger:{
        trigger: "#page>svg>circle",
        scroller: "#main",
        start: "top 90%",
        scrub: 1,
        // markers: true
    }
})


document.querySelector("#page form>input").addEventListener("mouseenter",function(){
    document.querySelector("#mousemove").style.scale = 0
}) 

document.querySelector("#page form>input").addEventListener("mouseleave",function(){
    document.querySelector("#mousemove").style.scale = 1
}) 


document.querySelector("#page form>button").addEventListener("mouseenter",function(){
    document.querySelector("#mousemove").style.scale = 0
}) 

document.querySelector("#page form>button").addEventListener("mouseleave",function(){
    document.querySelector("#mousemove").style.scale = 1
}) 




document.querySelector("#viewbtn").addEventListener("click",function(){
    gsap.to("#custom",{
        left: "0%",
    })
})

document.querySelector("#back-p1").addEventListener("click",function(){
    gsap.to("#custom",{
        left: "100%",
    })
})


document.querySelector("#page").addEventListener("mousemove",function(dets){
    gsap.to("#mousemove",{
        top : `${dets.y}px`,
        left : `${dets.x}px`
    })
    // document.querySelector("#mousemove").style.
    // document.querySelector("#mousemove").style.
})

document.querySelector("#page-select>h1").addEventListener("mouseenter",function(){
    this.style.backgroundColor = "white",
    document.querySelector("#mousemove").style.scale = 0
}) 

document.querySelector("#page-select>h1").addEventListener("mouseleave",function(){
    this.style.backgroundColor = "transparent",
    document.querySelector("#mousemove").style.scale = 1
}) 