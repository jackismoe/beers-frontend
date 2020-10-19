// menu
let menuIcons = document.querySelector('.menu-icons')
let body = document.querySelector('body')
let closeBtn = document.querySelector('.closeBtn')
let main = document.querySelector('.main')

document.addEventListener('click', (e) => {
  if (e.target === menuIcons) {
    openNav()
  } else if (e.target === closeBtn || e.target === body) {
    closeNav()
  }
})

let clickBtn = document.createElement('button')
clickBtn.innerText = 'Click Me'
clickBtn.className = 'button'
clickBtn.addEventListener('click', userPortal)

main.appendChild(clickBtn)

function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}

function openNav() {
  document.getElementById("mySideNav").style.width = "250px";
}


function showRandom() {
  let beer = Math.floor((Math.random() * 500))
  
  fetch(`http://localhost:3000/beers/${beer}`)
    .then(response => response.json())
    .then(fetchedBeer => createBeerObj(fetchedBeer))
}

function userPortal() {
  let mainContainer = document.querySelector('.main')
  let signUpForm = document.createElement('form')
  mainContainer.appendChild(signUpForm)

  let emailInput = document.createElement('input')
  let phoneInput = document.createElement('input')
  let passwordInput = document.createElement('input')
  let submit = document.createElement('button')

  emailInput.class = 'email'
  phoneInput.class = 'phone'
  passwordInput.class = 'password'
  submit.class = 'submit'

  emailInput.placeholder = 'Enter Email'
  phoneInput.placeholder = 'Enter Phone'
  passwordInput.placeholder = 'Enter Password'

  passwordInput.type = 'password'
  submit.innerText = 'Submit'

  signUpForm.appendChild(emailInput)
  signUpForm.appendChild(phoneInput)
  signUpForm.appendChild(passwordInput)
  signUpForm.appendChild(submit)

  submit.addEventListener('click', (e) => {
    e.preventDefault()
    let newUser = new User(emailInput.value, phoneInput.value, passwordInput.value)
    console.log(newUser)
    emailInput.value = ''
    phoneInput.value = ''
    passwordInput.value = ''
  })
}




function render(obj) {
  console.log(obj)
}