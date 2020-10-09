// let container = document.querySelector('#container')
// const render = (obj) => {
//   console.log(obj)
// }

let menuIcons = document.querySelector('.menu-icons')
let closeBtn = document.querySelector('.closeBtn')
let body = document.querySelector('body')

document.addEventListener('click', (e) => {
  if (e.target === menuIcons) {
    openNav()
  } else if (e.target === undefined) {
    closeNav()
  }
})


function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}

function openNav() {
  document.getElementById("mySideNav").style.width = "250px";
}
