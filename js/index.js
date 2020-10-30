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
let beersTable = document.createElement('table')

let signInBtn = document.createElement('button')
let signUpBtn = document.createElement('button')
let profileContainer = document.createElement('div')

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

// show buttons for sign up/ sign in
// menu links
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
  location.reload()
})
// about link
// home link

// home page links
loginLink.addEventListener('click', () => {
  profileContainer.remove()
  beersTable.remove()
  closeNav()
  userSignInPortal()
})