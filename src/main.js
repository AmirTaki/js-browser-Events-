// document.getElementById("text").innerHTML = "keyboard : EVENT"

/* --------------------- keydown --------------------------------- */

document.querySelector("#myform input[type=text]").addEventListener("keydown", (e)=>{
    // console.log('key down')
})

/* --------------------- keyup --------------------------------- */
document.querySelector("#myform input[type=text]").addEventListener("keyup", (e)=>{
    // console.log('key up')
})

//* --------------------- keypress --------------------------------- */
document.querySelector("#myform input[type=text]").addEventListener("keypress", (e)=>{
    // console.log('key press')
    // console.log(e) // return KeyboardEvent
})

// property => 

document.querySelector("#myform input[type=text]").addEventListener("keyup", (e)=>{
    
    let char = e.keyCode || e.charCode || e.which
    
    // console.log(char)
    
    console.log(String.fromCharCode(char))
    
    console.log(e.code)
    
    console.log(e.key)
    
    console.log(e.repeat) 
    
    console.log(e.altKey) 
    
    console.log(e.altKey) 
    
    console.log(e.shiftKey) 
    
    console.log(e.ctrlKey) 
})

