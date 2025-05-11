// document.getElementById("text").innerHTML = " scroll : EVENT?"


// 

window.addEventListener('scroll', function(e){
    console.log(this.document.documentElement.scrollTop)  // => return  distance scroll 
})