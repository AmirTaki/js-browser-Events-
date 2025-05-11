// document.getElementById("text").innerHTML = "drag event
// 


document.querySelector("#main-title").addEventListener("dragstart", (e)=>{
    console.log("dragStart")  // return => drag event
})

document.querySelector("#main-title").addEventListener("dragend", (e)=>{
    console.log("dragEnd")  // return => drag event
})

document.querySelector("#main-title").addEventListener("drag", (e)=>{
    console.log("drag")  // return => drag event
})



// property  
/*
   event.dataTransfer.setDaa("key","value") => drag start
 
 event.preventDefault() => drag over

 event.dataTransfer.getData('key')  => drop

*/


document.querySelector("#main-title").addEventListener("dragstart", (e)=>{
    console.log("dragStart")
   e.dataTransfer.setData("myDrag", e.target.id)
})

document.querySelector("header").addEventListener("dragover", (e)=>{
    console.log("dragover")
    e.preventDefault()
    
})
document.querySelector("header").addEventListener("drop", (e)=>{
    console.log('drop')
    let dataid = e.dataTransfer.getData('myDrag')
    console.log(document.getElementById(dataid))
    e.target.appendChild(document.getElementById(dataid))

})