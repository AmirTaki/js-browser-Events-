// document.getElementById("text").innerHTML = " mouse event : EVENT?"

/*   -------------------------------  Click   -------------------------------- */

// Click => object event : mouse event
document.querySelector("#to-do-list").addEventListener("click", (e)=>{
    console.log(e)  // => return Mouse Event
})

/*   -------------------------------  contextmenu   -------------------------------- */

// contextmenu : click right 
document.querySelector("#main-title").addEventListener("contextmenu", (e)=>{
    console.log(e) // => return Mouse Event
    console.log(e.preventDefault())
})

/*   -------------------------------  dblclick   -------------------------------- */

// dblclick : two click
document.querySelector("#myform").addEventListener("dblclick", (e)=>{
    console.log(e)  // => return Mouse Event
})

/*   -------------------------------  mousedown   -------------------------------- */

// mousedown  // compression click left mouse 
document.querySelector("#ref-link").addEventListener("mousedown", (e)=>{
    console.log(e)  // => return Mouse Event
})

/*   -------------------------------  mouseup   -------------------------------- */

// mouseup  // As soon as you pick it up click left mouse
document.querySelector("#header-title").addEventListener("mouseup", (e)=>{
    console.log(e)  // => return Mouse Event
})

/*   -------------------------------  mosueenter   -------------------------------- */

// mosueenter // Mouse pointer enters the element
document.querySelector(".to-do-section").addEventListener("mouseenter", (e)=>{
    console.log(e)  // => return Mouse Event
})

/*   -------------------------------  mouseleave   -------------------------------- */

// mouseleave // Mouse pointer leaving the element
document.querySelector("header").addEventListener("mouseleave", (e)=>{
    console.log(e)  // => return Mouse Event
})

/*   -------------------------------  mousemove   -------------------------------- */

// mousemove  // Moving the mouse pointer over the element
document.querySelector("h2").addEventListener("mousemove", (e)=>{
    console.log(e)  // => return Mouse Event
})

/*   -------------------------------  mouseover   -------------------------------- */

// mouseover // The mouse pointer enters the element or a child element.
document.querySelector("footer").addEventListener("mouseover", (e)=>{
    console.log(e)  // => return Mouse Event
})

/*   -------------------------------  mouseout   -------------------------------- */

// mouseout // The mouse pointer moves outside the element or outside a child element.
document.querySelector("footer").addEventListener("mouseout", (e)=>{
    console.log(e)  // => return Mouse Event
})

