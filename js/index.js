let menuIcons = document.querySelector('.menu-icons')
let body = document.querySelector('body')
let closeBtn = document.querySelector('.closeBtn')
let main = document.querySelector('.main')

let browseLink = document.querySelector('#browse')
let profileLink = document.querySelector('#profile')
let homeLink = document.querySelector('#home')
let aboutLink = document.querySelector('#about')

let signUpForm = document.createElement('form')
let mainContainer = document.querySelector('.main')

let signInBtn = document.createElement('button')
let signUpBtn = document.createElement('button')
let generateBtn = document.createElement('button')

function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}

function openNav() {
  document.getElementById("mySideNav").style.width = "250px";
}


function showRandom() {
  let beerId = Math.floor((Math.random() * 25 + 1))
  
  fetch(`http://localhost:3000/beers/${beerId}`)
    .then(response => response.json())
    .then(fetchedBeer => console.log(fetchedBeer))
}
// profileLink.addEventListener('click', showUser(currentUser))


function renderAll() {
  let beersTable = document.createElement('table')
  let idHeader = document.createElement('th')
  let brandHeader = document.createElement('th')
  let nameHeader = document.createElement('th')
  let styleHeader = document.createElement('th')
  let hopHeader = document.createElement('th')
  let yeastHeader = document.createElement('th')
  let maltsHeader = document.createElement('th')
  let ibuHeader = document.createElement('th')
  let abvHeader = document.createElement('th')
  let blgHeader = document.createElement('th') 
  
  idHeader.innerText = 'Beer ID'
  brandHeader.innerText = 'Brand' 
  nameHeader.innerText = 'Name'
  styleHeader.innerText = 'Style' 
  hopHeader.innerText = 'Hop' 
  yeastHeader.innerText = 'Yeast' 
  maltsHeader.innerText = 'Malts' 
  ibuHeader.innerText = 'IBU' 
  abvHeader.innerText = 'ABV%' 
  blgHeader.innerText = 'BLG°'
  
  beersTable.appendChild(idHeader)
  beersTable.appendChild(brandHeader)
  beersTable.appendChild(nameHeader)
  beersTable.appendChild(styleHeader)
  beersTable.appendChild(hopHeader)
  beersTable.appendChild(yeastHeader)
  beersTable.appendChild(maltsHeader)
  beersTable.appendChild(ibuHeader)
  beersTable.appendChild(abvHeader)
  beersTable.appendChild(blgHeader)
  
  main.appendChild(beersTable)
  
  clickBtn.replaceWith()
  // beers
  fetch(fetchUrl + `beers`)
  .then(response => response.json())
  .then(jsonResponse => {
    let allBeers = jsonResponse
    for (let x of allBeers) {
      let newRow = document.createElement('tr')
      beersTable.appendChild(newRow)
      
      let idCell = document.createElement('td')
      let brandCell = document.createElement('td')
      let nameCell = document.createElement('td')
      let styleCell = document.createElement('td')
      let hopCell = document.createElement('td')
      let yeastCell = document.createElement('td')
      let maltsCell = document.createElement('td')
      let ibuCell = document.createElement('td')
      let abvCell = document.createElement('td')
      let blgCell = document.createElement('td')
      
      idCell.className = 'beer-id'
      brandCell.className = 'beer-brand'
      nameCell.className = 'beer-name'
      styleCell.className = 'beer-style'
      hopCell.className = 'beer-hop'
      yeastCell.className = 'beer-yeast'
      maltsCell.className = 'beer-malts'
      ibuCell.className = 'beer-ibu'
      abvCell.className = 'beer-abv'
      blgCell.className = 'beer-blg'
      
      idCell.innerText = x.id
      brandCell.innerText = x.brand
      nameCell.innerText = x.name
      styleCell.innerText = x.style
      hopCell.innerText = x.hop
      yeastCell.innerText = x.yeast
      maltsCell.innerText = x.malts
      ibuCell.innerText = x.ibu
      abvCell.innerText = x.alcohol
      blgCell.innerText = x.blg
      
      newRow.appendChild(idCell)
      newRow.appendChild(brandCell) 
      newRow.appendChild(nameCell) 
      newRow.appendChild(styleCell) 
      newRow.appendChild(hopCell) 
      newRow.appendChild(yeastCell) 
      newRow.appendChild(maltsCell) 
      newRow.appendChild(ibuCell)
      newRow.appendChild(abvCell) 
      newRow.appendChild(blgCell)
    }
    
  })
}

document.addEventListener("DOMContentLoaded", () => {
  signInBtn.class = 'signin'
  signUpBtn.class = 'signup'
  generateBtn.class = 'generate'

  signInBtn.innerText = 'Sign-In'
  signUpBtn.innerText = 'Sign-Up'
  generateBtn.innerText = 'Generate'

  mainContainer.appendChild(signInBtn)
  mainContainer.appendChild(signUpBtn)
  mainContainer.appendChild(generateBtn)
})

browseLink.addEventListener('click', () => {  
  renderAll()
  closeNav()
})

homeLink.addEventListener('click', () => {
  location.reload()
})


document.addEventListener('click', (e) => {
  if (e.target === menuIcons) {
    openNav()
  } else if (e.target === closeBtn || e.target === body) {
    closeNav()
  }
})

signInBtn.addEventListener('click', () => {
  signInBtn.replaceWith()
  signUpBtn.replaceWith()
  generateBtn.replaceWith()
  userSignInPortal()
})

signUpBtn.addEventListener('click', () => {
  signInBtn.replaceWith()
  signUpBtn.replaceWith()
  generateBtn.replaceWith()
  userSignUpPortal()
})

generateBtn.addEventListener('click', () => {
  signInBtn.replaceWith()
  signUpBtn.replaceWith()
  generateBtn.replaceWith()
  showRandom()
})