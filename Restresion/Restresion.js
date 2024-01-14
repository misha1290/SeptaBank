document.addEventListener('DOMContentLoaded', function () {
    const background = document.querySelector('.video-container');

    document.addEventListener('mousemove', function (e) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

        background.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
    });
});

let buttonSub = document.querySelector('.restresion__button');
buttonSub.addEventListener('click', function(e) {
    e.preventDefault();

    let userName = document.querySelector('.restresion__username');
    let email = document.querySelector('.restresion__email');
    let password = document.querySelector('.restresion__password');
    let tel = document.querySelector('.restresion__tel');

    let userNameValue = userName.value;
    let emailValue = email.value;
    let passwordValue = password.value;
    let telValue = tel.value;

    if (userNameValue.length === 0 || userNameValue.charAt(0) !== userNameValue.charAt(0).toUpperCase()) {
        alert("Not a valid name");
        return;
    } else if (!emailValue.includes("@gmail.com")) {
        alert("Not a valid email");
        return;
    } else if (passwordValue.length < 8) {
        alert("Password must be at least 8 characters long");
        return;
    } else if (telValue.indexOf("+") !== 0 || telValue.length !== 13) {
        alert("Not a valid phone number");
        return;
    } else {
        window.location.href = "../Card/Card.html";
    }
});

function checkPassword() {
  var input = document.getElementById('passwordInput');
  var password = input.value;
  if (password !== '777') {
    input.classList.add('shake');
    setTimeout(function() {
      input.classList.remove('shake');
    }, 600);
  }
  else {
    window.location.href = "../Card/Card.html";
}
}

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
