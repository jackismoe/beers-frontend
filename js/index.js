let menuIcons = document.querySelector('.menu-icons')
let body = document.querySelector('body')
let closeBtn = document.querySelector('.closeBtn')
let main = document.querySelector('.main')
let browseButton = document.querySelector('#browse')
let loginLink = document.querySelector('#login')
let profileLink = document.querySelector('#profile')
let homeLink = document.querySelector('#home')
let aboutLink = document.querySelector('#about')
let userButtonContainer = document.querySelector('#user-button-container')
let logoutButtonContainer = document.querySelector('#logout-button-container')

let userSignInForm = document.createElement('form')
let userSignUpForm = document.createElement('form')
let mainContainer = document.querySelector('.main')
let allBeersTable = document.createElement('table')
let userBeersTable = document.createElement('table')


let signInBtn = document.createElement('button')
let signUpBtn = document.createElement('button')
let profileContainer = document.createElement('div')

let userButton
let logoutButton

signInBtn.class = 'button'
signUpBtn.class = 'button'
profileContainer.id = 'profile-container'

signInBtn.innerText = 'Sign-In'
signUpBtn.innerText = 'Sign-Up'

function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}

function openNav() {
  document.getElementById("mySideNav").style.width = "250px";
}

document.addEventListener('click', (e) => {
  if (e.target === menuIcons) {
    openNav()
  } else if (e.target === closeBtn || e.target === body) {
    closeNav()
  }
})

browseButton.addEventListener('click', () => {
  renderAll()         
})

homeLink.addEventListener('click', () => {
  // maybe scroll through images of different beers??
  showHomePage()
})

aboutLink.addEventListener('click', () => {
  // create about page
})

profileLink.addEventListener('click', () => {
  allBeersTable.remove()
  if (sessionStorage.length == 1) {
    fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          session: sessionStorage,
        })
    })
    .then(response => response.json())
    .then(jsonResponse => {
      console.log('You are logged in.')
      closeNav()
      loginUser()
      showUser(jsonResponse)
    })
  } else {
    closeNav()
  }
})
loginLink.addEventListener('click', () => {
  if (mainContainer.innerHTML == '') {
    closeNav()
    userSignInPortal()
  } else {
    closeNav()
    allBeersTable.remove()
    userSignInPortal()
  }
})

document.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.length == 1) {
    fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          session: sessionStorage,
        })
    })
    .then(response => response.json())
    .then(jsonResponse => {
      console.log('You are logged in.')
      loginUser()
      showUser(jsonResponse)
    })
  } else {
    showHomePage()
  }
})