document.getElementById('signUp').addEventListener('click', () => {
    document.getElementById('container').classList.add("right-panel-active");
});

document.getElementById('signIn').addEventListener('click', () => {
    document.getElementById('container').classList.remove("right-panel-active");
});


// const container =document.getElementById('container');
// const registerBtn =document.getElementById('register');
// const loginBtn =document.getElementById('login');

// registerBtn.addEventListener('click',() =>{
//     container.classList.add("active");
// });
// loginBtn.addEventListener('click',() =>{
//     container.classList.remove("active");
// });