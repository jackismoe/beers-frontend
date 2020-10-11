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

function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}

function openNav() {
  document.getElementById("mySideNav").style.width = "250px";
}

const render = (obj) => {
  console.log(obj)
}