// document.getElementById("text").innerHTML = "input event
// 

document.querySelector("#myform input[type=text]").addEventListener("input", (e)=>{
    // console.log(e)
    // console.log('input')
})

document.querySelector("#myform input[type=text]").addEventListener("beforeinput", (e)=>{
    // console.log(e)
    // console.log("beforeinput")
})

// property

document.querySelector("#myform input[type=text]").addEventListener("input", (e)=>{
    
    console.log(e.data)

    console.log(e.inputType)

    console.log(e.target)

    console.log(e.target.value)
})


document.querySelector("#myform input[type=text]").addEventListener("beforeinput", (e)=>{
   e.data == 0  ? e.preventDefault() : ""
})