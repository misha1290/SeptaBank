document.addEventListener('DOMContentLoaded', function () {
    const background = document.querySelector('.card');

    document.addEventListener('mousemove', function (e) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 20;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 20;

        background.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
    });
});
let card16 = document.querySelector(".card-make")
let form16 = document.querySelector(".form__make")
form16.addEventListener("click", function(event){
    event.preventDefault()
    let randomOne = Math.floor(Math.random()*9000)+1000
    let randomTwo = Math.floor(Math.random()*9000)+1000
    let randomThree = Math.floor(Math.random()*9000)+1000
    let randomFor = Math.floor(Math.random()*9000)+1000
    card16.innerHTML = `${randomOne} ${randomTwo} ${randomThree} ${randomFor}`
})
let cardCvv = document.querySelector(".card-make-2")
let formCvv = document.querySelector(".form__make-2")
formCvv.addEventListener("click", function(event){
    event.preventDefault()
    let randomCvv = Math.floor(Math.random()*900)+100
    cardCvv.innerHTML = `CVV - ${randomCvv}`
})
let cardDate = document.querySelector(".card-date")
let inputDate = document.querySelector(".form-date")
inputDate.addEventListener("input", function(){
    let inputDateValue = inputDate.value;
    let enteredDate = new Date(inputDateValue);
    enteredDate.setFullYear(enteredDate.getFullYear() + 5);
    let month = (enteredDate.getMonth() + 1).toString().padStart(2, '0');
    let year = enteredDate.getFullYear().toString().slice(-2);
    let formattedDate = `${month} / ${year}`;
    cardDate.innerHTML = formattedDate;
})
let cardName = document.querySelector(".card-name")
let inputName = document.querySelector(".form-name")
inputName.addEventListener("input", function(){
    let inputNameValue = inputName.value
    cardName.innerHTML = inputNameValue
})
let cardSekondName = document.querySelector(".card-secondName")
let inputSekondName = document.querySelector(".form-secondName")
inputSekondName.addEventListener("input", function(){
    let inputSekondNameValue = inputSekondName.value
    cardSekondName.innerHTML = inputSekondNameValue
})

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
