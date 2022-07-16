//modal interaction
const dialog = document.getElementById('dialog');
const cancel = document.getElementById('cancel');
const show = document.getElementById('show');

show.addEventListener('click', () => dialog.showModal())
cancel.addEventListener('click', () => dialog.close())

//modal displacement
const x = document.getElementById("login")
const y = document.getElementById("register")
const z = document.getElementById("btn")

function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}


