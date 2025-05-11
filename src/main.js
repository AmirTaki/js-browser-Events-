// document.getElementById("text").innerHTML = " Object EVENT?"

// object Event => event
document.querySelector("li").addEventListener("click", (event)=>{
    console.log(event)  // => return object event  : type : mouseEvent
})

document.querySelector("#main-title").addEventListener("keypress", (event)=>{
    console.log(event)  // return ojbect event : keyboardEvent
})