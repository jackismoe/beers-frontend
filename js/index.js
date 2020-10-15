// menu
let menuIcons = document.querySelector('.menu-icons')
let body = document.querySelector('body')

document.addEventListener('click', (e) => {
  if (e.target === menuIcons) {
    openNav()
  } else if (e.target === undefined || e.target === body) {
    closeNav()
  }
})

document.addEventListener('DOMContentLoaded', () => {
  let randomBtn = document.createElement('button')
  randomBtn.innerText = 'Click Me'
  randomBtn.className = 'button'
  randomBtn.addEventListener('click', showRandom())

  body.appendChild(randomBtn)


})

function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}

function openNav() {
  document.getElementById("mySideNav").style.width = "250px";
}
function showRandom() {
  console.log()
}

function render(obj) {
  console.log(obj)
}