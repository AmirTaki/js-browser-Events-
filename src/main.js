// document.getElementById("text").innerHTML = "property mouse event : EVENT?"


/* ---------------------- altKey ------------------------------------------ */ 

document.querySelector("#header-title").addEventListener('click', (e)=>{
    console.log(e.altKey)  // => return true | flase
})

/* ---------------------- ctrlKey ------------------------------------------ */ 

document.querySelector("#myform").addEventListener('click', (e)=>{
    console.log(e.ctrlKey)  // => return true | flase
})

/* ---------------------- shiftKey ------------------------------------------ */ 

document.querySelector("#main-title").addEventListener('click', (e)=>{
    console.log(e.shiftKey)  // => return true | flase
})

/* ---------------------- button ------------------------------------------ */ 

document.querySelector("#main-title").addEventListener('click', (e)=>{
    console.log(e.button)  // => return 
    // 0 :click left mouse & 
    // 0 : click scroll & 
    // 2 : click right mouse

})

/* ---------------------- clientX & clientY ------------------------------------------ */ 

document.querySelector("#to-do-list").addEventListener('click', (e)=>{
    console.log(e.clientX)  // => return  distance click to left browsers 
    console.log(e.clientY)  // => return distance click to top browsers
})


/* ---------------------- offsetX & offsetY ------------------------------------------ */ 

document.querySelector("#ref-link").addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(e.offsetX)  // => return  distance click to left element 
    console.log(e.offsetY)  // => return  distance click to top element 
})

/* ---------------------------- path ------------------------------------------ */ 

document.querySelector('#spanId').addEventListener("click",(e)=>{
    console.log(e.path) // => retutn list node element.parent
})

/* ---------------------------- relatedTarget ------------------------------------------ */ 

document.querySelector("h2").addEventListener("mouseenter", (e)=>{
    console.log(e.relatedTarget)  // return element
})

document.querySelector("h2").addEventListener("mouseleave", (e)=>{
    console.log(e.relatedTarget)  // return element
})

