// document.getElementById("text").innerHTML = " event Bubbling : EVENT?"

document.querySelector("ul").addEventListener("click", ()=>{
    console.log("ul")  // child
})

document.querySelector("ul li").addEventListener("click", ()=>{
    console.log("ul li")  // child -> parent
})

document.querySelector("ul li span").addEventListener("click", ()=>{
    console.log("ul li span") // child > parent(child)-> parent 
})

/* -------------------------------------------------------------------- */

//1- event capturing (parent -> child) : {capture : true}
//2- event Bubbling  (child -> parent) : default : {capture : false}

/*
capturing : ture , bubling : false
 capturing  v|  1   ul    6 |^ bubbling
            v|              |^    
            v|  2   li    5 |^
            v|              |^
            v|  3   span  4 |^

*/

document.querySelector("ul").addEventListener("click", ()=>{
    console.log("ul")  // child
},{capture:false})

document.querySelector("ul li").addEventListener("click", (event)=>{
    event.stopPropagation() // pause : capturing
    console.log("li")  // child -> parent
}, {capture:false})

document.querySelector("ul li span").addEventListener("click", ()=>{
    console.log("span") // child > parent(child)-> parent 
}, {capture:false})

// method :stopPropagation() => stop : bubbling OR capturing

/* -------------------------------------------------------------------- */

// stop click 
document.querySelector("#main-title").addEventListener("click", ()=>{
    console.log('mian - title')
},{once:true})  // => stop eventListener -> click 

/* -------------------------------------------------------------------- */