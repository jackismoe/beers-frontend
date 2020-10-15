// menu
let menuIcons = document.querySelector('.menu-icons')
let body = document.querySelector('body')
let closeBtn = document.querySelector('.closeBtn')

document.addEventListener('click', (e) => {
  if (e.target === menuIcons) {
    openNav()
  } else if (e.target === closeBtn || e.target === body) {
    closeNav()
  }
})

let clickBtn = document.createElement('button')
clickBtn.innerText = 'Click Me'
clickBtn.className = 'button'
clickBtn.addEventListener('click', showRandom)

body.appendChild(clickBtn)

function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}

function openNav() {
  document.getElementById("mySideNav").style.width = "250px";
}

let beerHistory = []

function showRandom() {
  console.log(beerHistory)
  let number = Math.floor((Math.random() * 500) + 1)
  if (beerHistory.includes(number)) {
    showRandom()
  } else {
    beerHistory.push(number)
    fetch(`http://localhost:3000/beers/${number}`)
      .then(response => response.json())
      .then(jsonResponse => console.log(jsonResponse))
  }
  console.log(beerHistory)
}

function render(obj) {
  console.log(obj)
}