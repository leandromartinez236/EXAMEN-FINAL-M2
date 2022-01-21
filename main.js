const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});


const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', (e) =>{
  e.preventDefault()
  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value
  // let usuario = {name, email, password}
  // console.log(usuario); 
  fetch('https://tiendavirtualmern.herokuapp.com/api/users', {
    method: 'POST',
    body: JSON.stringify({name: 'leandro', email: 'leandro@gmail.com',password: '1234'}),
    headers: {'Content-Type':'aplication/json'}
  })
  .then((response) => response.json())
  .then((data)=> console.log(data))
  .catch((error) => {
    console.error(error)
  })
})
