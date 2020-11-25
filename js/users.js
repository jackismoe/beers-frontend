class User {
  constructor(name, email, phone, password) {
    this.name = name
    this.email = email
    this.phone = phone
    this.password = password
  }
}

function createUserObj(user) {
  let configObject = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: user.name,
      email: user.email,
      phone: user.phone,
      password_digest: user.password
    })
  }

  fetch(`${BASE_URL}/users`, configObject)
    .then(response => response.json())
    .then(jsonResponse => {
      sessionStorage.setItem('user_id', jsonResponse.id)
      loginUser()    
    })
    .catch(error => alert(error.message))
}

function showUser() {
  userSignInForm.remove()
  userSignUpForm.remove()
  showBeerContainer.remove()
  
  pageHeader.innerText = 'Your Beer Log'

  
  if ((userBeersTable.rows.length == 0) && (Beer.currentUserBeers.length > 0)) {
    console.log('path a')
    createTable(userBeersTable, Beer.currentUserBeers)
  } else if ((userBeersTable.rows.length !== 0) && (Beer.currentUserBeers.length !== 0)){
    console.log('path b')
    mainContainer.appendChild(userBeersTable)
  } else {
    console.log('path c')
    mainContainer.appendChild(welcomeParagraph)
  }
}

function loginUser() {
  loginLink.style.visibility = 'hidden'
  profileLink.style.visibility = 'visible'
  userButtonContainer.innerHTML = '<button id="user-button">Generate New Beer</button>'
  logoutButtonContainer.innerHTML = '<button id="logout-button">Logout</button>'
  
  userButton = document.querySelector('#user-button')
  logoutButton = document.querySelector('#logout-button')
  
  userButton.addEventListener('click', () => {
    closeNav()
    Beer.generateBeer()
  })
  logoutButton.addEventListener('click', () => {
    closeNav()
    logoutUser()
  })
  showUser()
}

function userSignUpPortal() {
  userSignUpForm.id = 'sign-up'
  mainContainer.appendChild(profileContainer)
  profileContainer.appendChild(userSignUpForm)
  
  let nameInput = document.createElement('input')
  let emailInput = document.createElement('input')
  let phoneInput = document.createElement('input')
  let passwordInput = document.createElement('input')
  let passwordConfirm = document.createElement('input')
  let submit = document.createElement('button')
  let signInButton = document.createElement('button')
  
  nameInput.id = 'name'
  emailInput.id = 'email'
  phoneInput.id = 'phone'
  passwordInput.id = 'password'
  passwordInput.id = 'password-confirm'
  submit.id = 'submit'
  signInButton.id = 'sign-in'

  nameInput.placeholder = 'Enter Name'
  emailInput.placeholder = 'Enter Email'
  phoneInput.placeholder = 'Enter Phone (Optional)'
  passwordInput.placeholder = 'Enter Password'
  passwordConfirm.placeholder = 'Confirm Password'
  
  passwordInput.type = 'password'
  passwordConfirm.type = 'password'
  submit.innerText = 'Submit'
  signInButton.innerText = 'Already Registered? Sign In Here.'

  signInButton.addEventListener('click', () => {
    if (profileContainer.innerHTML = '' || '<form></form') {
      userSignInPortal()
    } else {
      mainContainer.appendChild(profileContainer)
    }
  })
    
  userSignUpForm.appendChild(nameInput)
  userSignUpForm.appendChild(emailInput)
  userSignUpForm.appendChild(phoneInput)
  userSignUpForm.appendChild(passwordInput)
  userSignUpForm.appendChild(passwordConfirm)
  userSignUpForm.appendChild(submit)
  userSignUpForm.appendChild(signInButton)
  
  submit.addEventListener('click', (e) => {
    e.preventDefault()
    if (passwordConfirm.value !== passwordInput.value || passwordConfirm.value == '' || passwordInput.value === '' ) {
      alert('Please check your password inputs and try again.')
      passwordInput.reset()
      passwordConfirm.reset()
    } else if (nameInput.value == '' || emailInput.value == ''){
      alert('You must fill in the entire form to continue.')
    } else {
      let newUser = new User(nameInput.value, emailInput.value, phoneInput.value, passwordInput.value)
      createUserObj(newUser)
      currentUser = newUser
    }
  })

}

function userSignInPortal() { 
  pageHeader.innerText = 'Login'

  sliderContainer.remove()
  let emailInput = document.createElement('input')
  let passwordInput = document.createElement('input')
  let submit = document.createElement('button')
  let signUpButton = document.createElement('button')
  emailInput.id = 'email'
  passwordInput.id = 'password'
  submit.id = 'submit'
  signUpButton.id = 'sign-up'
  
  emailInput.placeholder = 'Enter Email'
  passwordInput.placeholder = 'Enter Password'
  
  passwordInput.type = 'password'
  submit.innerText = 'Submit'
  signUpButton.innerText = "Not Registered Yet? Sign Up Here"
  signUpButton.addEventListener('click', () => {
    pageHeader.innerText = 'Sign Up'
    userSignInForm.remove()
  if (document.querySelector('form')) {
    profileContainer.appendChild(userSignUpForm)
  } else {
    userSignUpPortal()
  }
  })
  
  submit.addEventListener('click', (e) => {
    e.preventDefault()
    if (passwordInput.value === '') {
      alert('Please check your password inputs and try again.')
      passwordInput.value = ''
    } else if (emailInput.value === ''){
      alert('You must fill in the entire form to continue.')
    } else {
      let configObject = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: emailInput.value,
        })
      }
      
      fetch(BASE_URL, configObject)
        .then(response => response.json())
        .then(jsonResponse => {
          sessionStorage.setItem('user_id', jsonResponse.id)
          userSignInForm.reset()
          userSignInForm.remove()
          cta.remove()
          loginUser()
          showHomePage()
          currentUser = jsonResponse
        })
        .catch(error => {
          console.log(error.message)
          passwordInput.reset
          emailInput.reset
          alert('The user you are looking for could not be found. Please check your inputs and try again.')
        })
    }
  })
  userSignInForm.id = 'sign-in'
  if (profileContainer.innerHTML !== '') {
    userSignInForm.reset()
    userBeersTable.remove()
    mainContainer.appendChild(profileContainer)
    profileContainer.appendChild(userSignInForm)
  } else {
    userSignInForm.appendChild(emailInput)
    userSignInForm.appendChild(passwordInput)
    userSignInForm.appendChild(submit)
    userSignInForm.appendChild(signUpButton)
    mainContainer.appendChild(profileContainer)
    profileContainer.appendChild(userSignInForm)
  }
}

function logoutUser() {
  sessionStorage.clear()

  profileContainer.remove()
  logoutButton.remove()
  userButton.remove()
  allBeersTable.remove()

  loginLink.style.visibility = 'visible'
  profileLink.style.visibility = 'hidden'
  homeLink.style.visibility = 'hidden'
  Beer.currentUserBeers = []
  location.reload()
}

function createSlider() {
  let delayInSeconds = 3
  let counter = 0
  
  function changeImage() {
    counter++
    if (counter <= 4) {
      sliderContainer.innerHTML = `<img src="./assets/images/rotating-images/beer${counter}.jpg" width="700" height="500" id="rotator"></img>`
    } else {
      counter = 0
      changeImage()
    }
  }
  changeImage()
  setInterval(changeImage, delayInSeconds * 1000);
}

function showHomePage() {
  allBeersTable.remove()
  userBeersTable.remove()
  pageHeader.innerText = 'Home'
  createSlider()
  
  mainContainer.appendChild(homeDescriptionContainer)
  mainContainer.appendChild(sliderContainer)
  homeDescriptionContainer.appendChild(welcomeMessage)
  homeDescriptionContainer.appendChild(welcomeParagraph)
  if (sessionStorage.length !== 1) {
    homeDescriptionContainer.appendChild(cta)
  }
}

function editUser() {
  profileContainer.remove()
  welcomeParagraph.remove()
  homeDescriptionContainer.remove()
  allBeersTable.remove()
  sliderContainer.remove()

  pageHeader.innerText = `Edit ${currentUser.name}'s Profile`
  mainContainer.appendChild(editUserContainer)
  
  fetch(BASE_URL, {
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
    .then(user => { 
      if (editUserForm.children.length !== 0) {
        if (editEmailInput.placeholder !== user.email) {
          editEmailInput.placeholder = user.email
        }
        if (editNameInput.placeholder !== user.name) {
          editNameInput.placeholder = user.name
        }
        if (user.phone) {
          editPhoneInput.placeholder = user.phone
        } else {
          editPhoneInput.placeholder = 'Phone'
        }
      } else {
        editNameInput = document.createElement('input')
        editEmailInput = document.createElement('input')
        editPhoneInput = document.createElement('input')
        let editPasswordInput = document.createElement('input')
        let editPasswordConfirm = document.createElement('input')
        let editSubmit = document.createElement('button')
        let deleteUserBtn = document.createElement('button')

        let editNameLabel = document.createElement('label')
        let editEmailLabel = document.createElement('label')
        let editPhoneLabel = document.createElement('label')
        let editPasswordLabel = document.createElement('label')
        let editPasswordConfirmLabel = document.createElement('label')

        editNameLabel.innerText = 'Name:'
        editEmailLabel.innerText = 'Email:'
        editPhoneLabel.innerText = 'Phone Number:'
        editPasswordLabel.innerText = 'Password:'
        editPasswordConfirmLabel.innerText = 'Confirm Password:'
        
        editNameInput.id = 'name'
        editEmailInput.id = 'email'
        editPhoneInput.id = 'phone'
        editPasswordInput.id = 'password'
        editPasswordConfirm.id = 'password-confirm'
        editSubmit.id = 'submit'

        editNameInput.placeholder = user.name
        editEmailInput.placeholder = user.email
        if (user.phone) {
          editPhoneInput.placeholder = user.phone
        } else {
          editPhoneInput.placeholder = 'Phone'
        }
        editPasswordInput.placeholder = 'Password'
        editPasswordConfirm.placeholder = 'Confirm Password'
        editSubmit.innerText = 'Submit Changes'
        deleteUserBtn.innerText = 'Delete User Account'
        
        editUserForm.appendChild(editNameLabel)
        editUserForm.appendChild(editNameInput)
        editUserForm.appendChild(editEmailLabel)
        editUserForm.appendChild(editEmailInput)
        editUserForm.appendChild(editPhoneLabel)
        editUserForm.appendChild(editPhoneInput)
        editUserForm.appendChild(editPasswordLabel)
        editUserForm.appendChild(editPasswordInput)
        editUserForm.appendChild(editPasswordConfirmLabel)
        editUserForm.appendChild(editPasswordConfirm)
        editUserForm.appendChild(editSubmit)
        editUserForm.appendChild(deleteUserBtn)

        editUserContainer.appendChild(editUserForm)
        deleteUserBtn.addEventListener('click', () => {
          alert('Confirm Delete User?')
          alert('Are you sure? This is an irreversible action.')
          deleteUser(user)
        })
  
        editSubmit.addEventListener('click', (e) => {
          e.preventDefault()
          if (editPasswordInput.value !== editPasswordConfirm.value) {
            alert(`Sorry ${user.name}, your passwords do not match. Please try again.`)
          } else {
            fetch(`${BASE_URL}/users/${user.id}`, {
              method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                },
                body: JSON.stringify({
                  name: editNameInput.value,
                  email: editEmailInput.value,
                  phone: editPhoneInput.value,
                  password_digest: editPasswordInput.value,
                })
            })
              .then(response => response.json())
              .then(jsonResponse => {
                currentUser = jsonResponse
                editUserForm.reset()
                editUserContainer.remove()
                showUser()
              })
          }
        })
      }

    })
}

function deleteUser(user) {
  fetch(`${BASE_URL}/users/${user.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      user: user
    })
  })
  .then(response => {
    sessionStorage.clear()
    logoutUser()
  })
}