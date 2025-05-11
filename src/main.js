// document.getElementById("text").innerHTML = " load: EVENT?"



// document.querySelector("#to-do-list").remove()


window.addEventListener("load", ()=>{
    
    console.log("load")
    document.querySelector("#to-do-list").remove()
    
})

window.addEventListener("DOMContentLoaded", ()=>{
    
    console.log("DOMContentLoaded")
    // document.querySelector("#to-do-list").remove()
    
})


// load :  all file : load  

//DOMContentLoaded : documnet load : file(img, style , ..) not load => speed fast