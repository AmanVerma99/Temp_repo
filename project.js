const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var vedio = document.querySelector("#video-container")
var playbtn = document.querySelector("#play")
vedio.addEventListener("mouseenter",function(){
    playbtn.style.opacity = 1;
    playbtn.style.scale = 1;
})
var cur = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    cur.style.left = dets.x+"px"
    cur.style.top = dets.y+"px" 
})

var exp = document.querySelector("#elem1 .dets");
// var flag = 0;
exp.addEventListener("mouseenter", function () {
    // if(flag == 0){
    var newDiv = document.createElement("div");
    
    newDiv.innerHTML = "<p>This is a dynamically added paragraph!</p>";

    // Append the new div to the existing container div
    var container = document.getElementById("container");
    container.appendChild(newDiv);
    // flag= flag+1;
    // }
})

exp.addEventListener("mouseleave", function () {
    // var newDiv = document.createElement("div");
    var paragraph = document.getElementById("container");
    // newDiv.innerHTML = "<p></p>";
    paragraph.textContent = ""
    // Append the new div to the existing container div
    // var container = document.getElementById("container");
    // container.appendChild(newDiv);
    // flag= flag+1;
    
})


vedio.addEventListener("mouseleave",function(){
    playbtn.style.opacity = 0;
    playbtn.style.scale = 0;
})

vedio.addEventListener("mousemove",function(dets){
    playbtn.style.left = dets.x+"px"
    playbtn.style.top = dets.y+"px" 
})

gsap.from("#page1 h1",{
     y:30,
     opacity: 0,
     delay: 0.5,
     duration: 0.8,
     stagger: 0.2
})

gsap.from("#link",{
    //  y:30,
    //  opacity: 0,
    //  delay: 0.5,
    //  duration: 0.8,
    //  stagger: 0.2
    onStart:function(){
        $('#link').textillate({ in: { effect: 'rollIn' } });
    }
})

var tl = gsap.timeline();
tl
    .from("#svg",{
        opacity:0,
        y:40,
        duration:2

    })
    // .from("#link",{
    //     opacity:0,
    //     y:40
    // })

gsap.from("#page1 #video-container",{
    scale:0.9,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
})

document.querySelector("#child1").addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        transform: 'translate(-50%,-50%) scale(1)' 
    })
})

document.querySelector("#child1").addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        transform: 'translate(-50%,-50%) scale(0)' 
    })
})

var tl = gsap.timeline();
tl
    .from("#child1",{
        opacity:0,
        y:40,
        delay:2,
        duration:13

    })
    .from("#child2",{
        opacity:0,
        y:40,
        delay:5

    })

