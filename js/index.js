let menuIcons = document.querySelector('.menu-icons')
let sideNav = document.querySelector('.sidenav')
let body = document.querySelector('body')
let closeBtn = document.querySelector('.closeBtn')
let main = document.querySelector('.main')
let browseButton = document.querySelector('#browse')
let loginLink = document.querySelector('#login')
let profileLink = document.querySelector('#profile')
let homeLink = document.querySelector('#home')
let userButtonContainer = document.querySelector('#user-button-container')
let logoutButtonContainer = document.querySelector('#logout-button-container')
let ctaLink = document.querySelector('#cta-link')
let mainContainer = document.querySelector('.main')
let pageHeader = document.querySelector('#page-header')
let viewSubNav = document.querySelector('#view')
let editSubNav = document.querySelector('#edit')

let userSignInForm = document.createElement('form')
let userSignUpForm = document.createElement('form')
let editUserForm = document.createElement('form')
let allBeersTable = document.createElement('table')
let userBeersTable = document.createElement('table')
let editUserContainer = document.createElement('div')
let homeDescriptionContainer = document.createElement('div')
let welcomeMessage = document.createElement('h2')
let welcomeParagraph = document.createElement('p')
let cta = document.createElement('button')
let welcome = document.createElement('p')
let signInBtn = document.createElement('button')
let signUpBtn = document.createElement('button')
let profileContainer = document.createElement('div')
let sliderContainer = document.createElement('div')
let editNameInput = document.createElement('input')
let editEmailInput = document.createElement('input')
let editPhoneInput = document.createElement('input')
let showBeerContainer = document.createElement('div')
let addRemoveButton = document.createElement('button')
let beerImageContainer = document.createElement('div')
let showBeerTable = document.createElement('table')
let userCounter = 0
let allCounter = 0
let userButton
let logoutButton

beerImageContainer.id = 'beer-img'
welcomeMessage.id = 'welcome-message'
welcomeParagraph.id = 'welcome-paragraph'
cta.id = 'call-to-action'
sliderContainer.id = 'image-slider'  
profileContainer.id = 'profile-container'
homeDescriptionContainer.id = 'home-description-container'
showBeerContainer.id = 'show-beer-container'
userBeersTable.id = 'user-beer-table'

signInBtn.class = 'button'
signUpBtn.class = 'button'

welcomeMessage.innerText = 'Welcome to MyNextBeer!'
welcomeParagraph.innerText = `Here we can help you decide which beer you can order next time you go to the bar or brewery, or even order on amazon. Whether it be a stout, IPA, pilsner, or even something a litte more exotic, we've got you covered!`
cta.innerText = `To get started, login or sign up here`
signInBtn.innerText = 'Sign-In'
signUpBtn.innerText = 'Sign-Up'

cta.addEventListener('click', () => {
  homeDescriptionContainer.remove()
  userSignInPortal()
})

function closeNav() {
  pageHeader.style.left = '0'
  document.getElementById("mySideNav").style.width = "0";
}

function openNav() {
  document.getElementById("mySideNav").style.width = "250px";
  pageHeader.style.left = '250'
}

document.addEventListener('click', (e) => {
  if (e.target === menuIcons) {
    openNav()
  } else if (e.target === closeBtn) {
    closeNav()
  }
})

browseButton.addEventListener('click', () => {
  homeDescriptionContainer.remove()
  showBeerContainer.remove()
  userBeersTable.remove()
  closeNav()
  renderAll()         
})

homeLink.addEventListener('click', () => {
  editUserContainer.remove()
  pageHeader.innerText = 'Home'
  showBeerContainer.remove()
  profileContainer.remove()

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
      closeNav()
      loginUser()
      showUser(jsonResponse)
    })
  } else {
    closeNav()
  }
})

editSubNav.addEventListener('click', () => {
  closeNav()
  editUserForm.reset()
  allBeersTable.remove()
  userBeersTable.remove()
  profileContainer.remove()
  showBeerContainer.remove()
    editUser()
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
      loginUser()
      showUser(jsonResponse)
      currentUser = jsonResponse
    })
  } else {
    showHomePage()
  }
})

profileLink.addEventListener('mouseover', () => {
  editSubNav.style.visibility = 'visible'
})
editSubNav.addEventListener('mouseover', () => {
  editSubNav.style.visibility = 'visible'
})
profileLink.addEventListener('mouseout', () => {
  editSubNav.style.visibility = 'hidden'
})
editSubNav.addEventListener('mouseout', () => {
  editSubNav.style.visibility = 'hidden'
})