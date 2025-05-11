// document.getElementById("text").innerHTML = " Personal event : EVENT?"


// Custom Event (name, {object}  )


let myEvent = new CustomEvent("personalEvent", {detail: Date.now()})

// handel event 

document.querySelector("main").addEventListener("personalEvent", (e)=>{
    e.target.style.backgroundColor = "red"
})

window.addEventListener("scroll", (e)=>{
    if(this.document.documentElement.scrollTop >= 214){
        document.querySelector("main").dispatchEvent(myEvent)
    } 
})