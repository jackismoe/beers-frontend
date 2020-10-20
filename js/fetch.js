let fetchUrl = 'http://localhost:3000/'
document.addEventListener('DOMContentLoaded', () => {
  // users
  fetch(fetchUrl + `users`)
    .then(response => response.json())
    .then(jsonResponse => {
      let allUsers = jsonResponse
      console.log(allUsers)
    })
})
