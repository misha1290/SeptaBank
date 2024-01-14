/* let boxColor = document.querySelector(".blok-skroll") 
window.addEventListener("scroll", function () {
    if(this.scrollY > 400) {
        boxColor.classList.add("new")
    }
    else{
        boxColor.classList.remove("new")
    }
}) */

let texT = document.querySelector('.loading')
    window.addEventListener('load',function(){
        texT.classList.add('tuck')
        setTimeout(function(){
            texT.classList.remove()
        },1000)
    })
let hidden = document.querySelector('body')
    window.addEventListener('load',function(){
        hidden.classList.add('tuck')
        setTimeout(function(){
            hidden.classList.remove()
        },1000)
    })
