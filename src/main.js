// document.getElementById("text").innerHTML = " orientation Change : EVENT?"


// screen -> orientation.type

window.screen.orientation.type  // => return : landscape - primary

// event : orientation change

window.addEventListener("orientationchange" ,(e)=>{
    console.log(window.screen.orientation)
    console.log(window.screen.orientation.type)

    document.body.style.backgroundColor = window.screen.orientation.type == "landscape-primary" ? "red" : 'blue'
})
   
