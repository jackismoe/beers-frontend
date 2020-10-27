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

  fetch('http://localhost:3000/users', configObject)
    .then(response => response.json())
    .then(jsonResponse => console.log(jsonResponse))
    .catch(error => alert(error.message))
}

function showUser(user) {
  userForm.replaceWith()

  let nameH2 = document.createElement('h2')
  nameH2.innerText = user.name
  mainContainer.appendChild(nameH2)

  //fetch beers of current user
  let configObject = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      id: user.id,
    })
  }
  // fetch(`http://localhost:3000/`, configObject)
  // fetch(`http://localhost:3000/`)
  //   .then(response => response.json())
  //   .then(jsonResponse => {
  //     console.log(jsonResponse)
      // let beersTable = document.createElement('table')
      // let idHeader = document.createElement('th')
      // let brandHeader = document.createElement('th')
      // let nameHeader = document.createElement('th')
      // let styleHeader = document.createElement('th')
      // let hopHeader = document.createElement('th')
      // let yeastHeader = document.createElement('th')
      // let maltsHeader = document.createElement('th')
      // let ibuHeader = document.createElement('th')
      // let abvHeader = document.createElement('th')
      // let blgHeader = document.createElement('th') 

      // idHeader.innerText = 'Beer ID'
      // brandHeader.innerText = 'Brand' 
      // nameHeader.innerText = 'Name'
      // styleHeader.innerText = 'Style' 
      // hopHeader.innerText = 'Hop' 
      // yeastHeader.innerText = 'Yeast' 
      // maltsHeader.innerText = 'Malts' 
      // ibuHeader.innerText = 'IBU' 
      // abvHeader.innerText = 'ABV%' 
      // blgHeader.innerText = 'BLG°'

      // beersTable.appendChild(idHeader)
      // beersTable.appendChild(brandHeader)
      // beersTable.appendChild(nameHeader)
      // beersTable.appendChild(styleHeader)
      // beersTable.appendChild(hopHeader)
      // beersTable.appendChild(yeastHeader)
      // beersTable.appendChild(maltsHeader)
      // beersTable.appendChild(ibuHeader)
      // beersTable.appendChild(abvHeader)
      // beersTable.appendChild(blgHeader)

      // main.appendChild(beersTable)
      // for (let x of jsonResponse) {
      //   let newRow = document.createElement('tr')
      //   beersTable.appendChild(newRow)
        
      //   let idCell = document.createElement('td')
      //   let brandCell = document.createElement('td')
      //   let nameCell = document.createElement('td')
      //   let styleCell = document.createElement('td')
      //   let hopCell = document.createElement('td')
      //   let yeastCell = document.createElement('td')
      //   let maltsCell = document.createElement('td')
      //   let ibuCell = document.createElement('td')
      //   let abvCell = document.createElement('td')
      //   let blgCell = document.createElement('td')
        
      //   idCell.className = 'beer-id'
      //   brandCell.className = 'beer-brand'
      //   nameCell.className = 'beer-name'
      //   styleCell.className = 'beer-style'
      //   hopCell.className = 'beer-hop'
      //   yeastCell.className = 'beer-yeast'
      //   maltsCell.className = 'beer-malts'
      //   ibuCell.className = 'beer-ibu'
      //   abvCell.className = 'beer-abv'
      //   blgCell.className = 'beer-blg'
        
      //   idCell.innerText = x.id
      //   brandCell.innerText = x.brand
      //   nameCell.innerText = x.name
      //   styleCell.innerText = x.style
      //   hopCell.innerText = x.hop
      //   yeastCell.innerText = x.yeast
      //   maltsCell.innerText = x.malts
      //   ibuCell.innerText = x.ibu
      //   abvCell.innerText = x.alcohol
      //   blgCell.innerText = x.blg
        
      //   newRow.appendChild(idCell)
      //   newRow.appendChild(brandCell) 
      //   newRow.appendChild(nameCell) 
      //   newRow.appendChild(styleCell) 
      //   newRow.appendChild(hopCell) 
      //   newRow.appendChild(yeastCell) 
      //   newRow.appendChild(maltsCell) 
      //   newRow.appendChild(ibuCell)
      //   newRow.appendChild(abvCell) 
      //   newRow.appendChild(blgCell)
      // }
    // }
}

function userSignUpPortal() {
  userSignUpForm.id = 'sign-up'
  mainContainer.appendChild(userSignUpForm)
  
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
    nameInput.remove()
    emailInput.remove()
    phoneInput.remove()
    passwordInput.remove()
    passwordInput.remove()
    submit.remove()
    signInButton.remove()
    userSignUpForm.remove()
    userSignInPortal()
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
      passwordInput.value = ''
      passwordConfirm.value = ''
    } else if (nameInput.value == '' || emailInput.value == ''){
      alert('You must fill in the entire form to continue.')
    } else {
      let newUser = new User(nameInput.value, emailInput.value, phoneInput.value, passwordInput.value)
      createUserObj(newUser)
      showUser(newUser)
    }
  })
}

function userSignInPortal() {  
  userSignInForm.id = 'sign-in'
  mainContainer.appendChild(userSignInForm)
  
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
  
  userSignInForm.appendChild(emailInput)
  userSignInForm.appendChild(passwordInput)
  userSignInForm.appendChild(submit)
  userSignInForm.appendChild(signUpButton)

  signUpButton.addEventListener('click', () => {
    emailInput.remove()
    passwordInput.remove()
    submit.remove()
    signUpButton.remove()
    userSignInForm.remove()
    userSignUpPortal()
  })

  submit.addEventListener('click', (e) => {
    e.preventDefault()
    // fetch to sessions#new and get user id. set user id to session id
    if (passwordInput.value === '') {
      alert('Please check your password inputs and try again.')
      passwordInput.value = ''
    } else if (emailInput.value == ''){
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
      
      fetch('http://localhost:3000/', configObject)
        .then(response => response.json())
        .then(jsonResponse => showUser(jsonResponse))
        .catch(error => {
          console.log(error.message)
          passwordInput.value = ''
          emailInput.value = ''
          alert('The user you are looking for could not be found. Please check your inputs and try again.')
        })
    }
  })
}
