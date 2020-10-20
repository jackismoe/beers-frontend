let fetchUrl = 'http://localhost:3000/'
document.addEventListener('DOMContentLoaded', () => {
  // users
  fetch(fetchUrl + `users`)
    .then(response => response.json())
    .then(jsonResponse => {
      let allUsers = jsonResponse
      // render(jsonResponse)
    })

  // beers
    fetch(fetchUrl + `beers`)
      .then(response => response.json())
      // .then(jsonResponse => render(jsonResponse))
})

