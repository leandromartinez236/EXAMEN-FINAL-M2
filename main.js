const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

const apiTienda = document.querySelector(".container");
const url = "https://tiendavirtualmern.herokuapp.com/api";
fetch(url).then((response) => console.log(response));


document.getElementById('formulario').addEventListener('submit', (e)=> {
  e.preventDefault();
  const createAccount = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
  }
  console.log(createAccount);
  fetch("https://tiendavirtualmern.herokuapp.com/api/users", {
    headers: { "Content-Type" : "application/json" },
    method: 'POST',
    body: JSON.stringify(createAccount)
  })
  .then((response) => response.json())
  .then((data) => console.log(data));
})

document.getElementById('formulario-dos').addEventListener('submit', (e)=> {
  e.preventDefault();
  const signIn = {
    email: document.getElementById('loginEmail').value,
    password: document.getElementById('loginPassword').value,
  }
  fetch("https://tiendavirtualmern.herokuapp.com/api/users/login", {
    headers: { "Content-Type" : "application/json" },
    method: 'POST',
    body: JSON.stringify(signIn)
  })
  .then((response) => response.json())
  .then((data) => console.log(data));
})

