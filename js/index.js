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
let homeDescriptionContainer = document.createElement('div')
let welcomeMessage = document.createElement('h2')
let welcomeParagraph = document.createElement('p')
let cta = document.createElement('button')

welcomeMessage.id = 'welcome-message'
welcomeParagraph.id = 'welcome-paragraph'
cta.id = 'call-to-action'

welcomeMessage.innerText = 'Welcome to MyNextBeer!'
welcomeParagraph.innerText = `Here we can help you decide which beer you can order next time you go to the bar or brewery, or even order on amazon. Whether it be a stout, IPA, pilsner, or even something a litte more exotic, we've got you covered!`
cta.innerText = `To get started, login or sign up here`

cta.addEventListener('click', () => {
  homeDescriptionContainer.remove()
  userSignInPortal()
})

let signInBtn = document.createElement('button')
let signUpBtn = document.createElement('button')
let profileContainer = document.createElement('div')
let sliderContainer = document.createElement('div')
sliderContainer.id = 'image-slider'  

let ctaLink = document.querySelector('#cta-link')
let userButton
let logoutButton

signInBtn.class = 'button'
signUpBtn.class = 'button'
profileContainer.id = 'profile-container'
homeDescriptionContainer.id = 'home-description-container'

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
  homeDescriptionContainer.remove()
  renderAll()         
})

homeLink.addEventListener('click', () => {
  if (homeDescriptionContainer.innerHTML = '') {
    showHomePage()
  } else {
    userBeersTable.remove()
    allBeersTable.remove()
    mainContainer.appendChild(homeDescriptionContainer)
    mainContainer.appendChild(sliderContainer)
    homeDescriptionContainer.appendChild(welcomeMessage)
    homeDescriptionContainer.appendChild(welcomeParagraph)
    if (sessionStorage.length !== 1) {
      homeDescriptionContainer.appendChild(cta)
    }
  }
  closeNav()
})

aboutLink.addEventListener('click', () => {
  // create about page
})

profileLink.addEventListener('click', () => {
  allBeersTable.remove()
  sliderContainer.remove()
  homeDescriptionContainer.remove()
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
      if (profileContainer.innerHTML = '' || '<table></table') {
        showUser(jsonResponse)
      } else {
        mainContainer.appendChild(profileContainer)
        profileContainer.appendChild(userBeersTable)
      }
    })
  } else {
    closeNav()
  }
})
loginLink.addEventListener('click', () => {
  homeDescriptionContainer.remove()
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
      showHomePage()
    })
  } else {
    showHomePage()
  }
})