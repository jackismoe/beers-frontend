class User {
  constructor(email, phone, password) {
    this.email = email
    this.phone = phone
    this.password = password
  }
}

async function createUserObj(user) {
  let configObject = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      "Access-Control-Allow-Origin" : "*", 
      "Access-Control-Allow-Credentials" : true 
    },
    body: JSON.stringify({
      email: user.email,
      phone: user.phone,
      password_digest: user.password
    })
  }

  fetch('http://localhost:3000/users', configObject)
}