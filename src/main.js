// document.getElementById("text").innerHTML = "touch event:EVENT?"

// touch start
document.querySelector("#to-do-list").addEventListener("touchstart", (event)=>{
    console.log(event, "touchStart")
})

// "onclick" in doucument.body         : check onclik 
// "ontouchstart" in doucument.body   : check ontouch 

// touch end
document.querySelector("#to-do-list").addEventListener("touchend", (event)=>{
    console.log(event, "touchEnd")
})

// touch move
document.querySelector("#to-do-list").addEventListener("touchmove", (event)=>{
    console.log(event, "touchMove")
})

// touch cancel   : pause in touch
document.querySelector("#to-do-list").addEventListener("touchcancel", (event)=>{
    console.log(event, "touchcancel")
})


// property touch Start

document.querySelector("#ref-link").addEventListener("touchstart", (event)=>{
    console.log(event.touches)  // return TouchList
})

document.querySelector("#ref-link").addEventListener("touchend", (event)=>{
    console.log(event.touches)  // return TouchList -> length = 0
})
