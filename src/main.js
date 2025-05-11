// document.getElementById("text").innerHTML = "transition event "
// 


document.querySelector('#main-title').addEventListener("transitionend", (e)=>{
    // console.log(e)
    console.log(e.propertyName)  // property 
})