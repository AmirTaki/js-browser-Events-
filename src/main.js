// document.getElementById("text").innerHTML = "clipboard event"
// 

document.querySelector("#myform input[type=text]").addEventListener("copy", (e)=>{
    console.log('copy', e)
})

document.querySelector("#myform input[type=text]").addEventListener("cut", (e)=>{
    console.log('cut', e)
})

document.querySelector("#myform input[type=text]").addEventListener("paste", (e)=>{
    console.log('paste', e)
})