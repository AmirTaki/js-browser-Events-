// document.getElementById("text").innerHTML = "What is an EVENT?"

//  Event Click  => attribute onClick

let clickEvent = () => {
    console.log("clicEvent")
    document.querySelector("footer").remove()
}


// event : 1- Occurs by the user  =>  Event click
// event : 2- Depending on what happens in the browser  => Event load

// addEventListener  => event : click

// document.querySelector('li').addEventListener("click", clickEvent)

document.querySelectorAll('li')[1].addEventListener("click", (e)=>{
        document.querySelector("footer").remove()  
})