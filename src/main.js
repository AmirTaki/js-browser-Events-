// document.getElementById("text").innerHTML = "animation : EVENT "

// animation start
document.querySelector("#main-title").addEventListener("animationstart",(e)=>{
    console.log("animationStart:", e)
})

// animation end
document.querySelector("#main-title").addEventListener("animationend",(e)=>{
    console.log("animationEnd:", e)
})