// document.getElementById("text").innerHTML = " Event hierarchy: EVENT?"

document.querySelector("ul").addEventListener("click", (e)=>{
    console.log(e)  // => return objectEvent : mouseEvent  -> (inherit)MouseEvent -> (inherit)UIEvent -> (inherit) Event
})

/// property type for object Event  because (inherit) pass object.Event property type 

document.querySelector("#main-title").addEventListener("click", (e)=>{
    console.log(e.type)  
})


// load event
window.addEventListener('load', (event)=>{
    console.log(event)  // => return type event
    
})