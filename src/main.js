// document.getElementById("text").innerHTML = "focus event
// 

document.querySelector("#myform input[type=text]").addEventListener("focus", (e)=>{
    console.log('focus')
    console.log(e.relatedTarget)
})

document.querySelector("#myform input[type=text]").addEventListener("blur", (e)=>{
    console.log('blur')
    console.log(e.relatedTarget)
})