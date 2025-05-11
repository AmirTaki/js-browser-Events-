// document.getElementById("text").innerHTML = " property Event: EVENT?"


// property event
document.querySelector("ul").addEventListener("click", (e)=>{
    console.log(e) // return objectEvent type : MouseEvent

    // property type
    console.log(e.type)  // return type event
 
    // property target
    console.log(e.target)  // return element 


    // property currentTarget
    console.log(e.currentTarget)  // return element => eventListener (click)

    // property timeStamp
    console.log(e.timeStamp)  // return => The moment فهئث to click

 
})


// method preventDefault
document.querySelector('#ref-link').addEventListener("click", (e)=>{
 
    e.preventDefault() // stop defalut  
})