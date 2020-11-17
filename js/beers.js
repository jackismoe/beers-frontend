class Beer {
  static allBeers = []
  static currentUserBeers = []

  constructor(id, brand, name, style, hop, yeast, malts, ibu, alcohol, blg) {
    this.id = id
    this.brand = brand
    this.name = name
    this.style = style
    this.hop = hop
    this.yeast = yeast
    this.malts = malts
    this.ibu = ibu
    this.alcohol = alcohol
    this.blg = blg
  }

  // class
  static getAll() {
    fetch(`${BASE_URL}/all_beers`)
    .then(response => response.json())
    .then(jsonResponse => {
      for (let x of jsonResponse) {
        let newBeer = new Beer(x.id, x.brand, x.name, x.style, x.hop, x.yeast, x.malts, x.ibu, x.alcohol, x.blg)
        if (!Beer.allBeers.includes(newBeer)) {
          Beer.allBeers.push(newBeer)
        }
      }
    })
  }

  static getUserBeers() {
    fetch(`${BASE_URL}/users/${sessionStorage.user_id}/beers`)
    .then(response => response.json())
    .then(jsonResponse => {
      for (let x of jsonResponse) {
        let newBeer = new Beer(x.id, x.brand, x.name, x.style, x.hop, x.yeast, x.malts, x.ibu, x.alcohol, x.blg)
        if (!Beer.currentUserBeers.includes(newBeer)) {
          Beer.currentUserBeers.push(newBeer)
        }
      }
    })
  }

  static renderAll() {
    if (allBeersTable.rows.length == 0) {
      createTableHeaders(allBeersTable)
      for (let x of Beer.allBeers) {
        x.createBeerRows(allBeersTable)


      }
    } else {
      mainContainer.appendChild(allBeersTable)
    }
  }
  
  static generateBeer() {
    fetch(`${BASE_URL}/users/${sessionStorage.user_id}/beers`, { 
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(fetchedBeer => {
        let newBeer= new Beer(fetchedBeer.id, fetchedBeer.brand, fetchedBeer.name, fetchedBeer.style, fetchedBeer.hop, fetchedBeer.yeast, fetchedBeer.malts, fetchedBeer.alcohol, fetchedBeer.blg)
        Beer.currentUserBeers.push(newBeer)
        Beer.allBeers.push(newBeer)
      })
    return Beer.allBeers[Beer.allBeers.length -1]
  }

  // instance
  show() {
    allBeersTable.remove()
    pageHeader.innerText = `${this.brand} ${this.name}`

    if (showBeerTable.rows.length == 0) {
      console.log('a')
      createTableHeaders(showBeerTable)
      this.createBeerRows(showBeerTable)
    } else {
      console.log('b')
      showBeerTable.rows[0].remove()
      this.createBeerRows(showBeerTable)
    }
    mainContainer.appendChild(showBeerContainer)
    showBeerContainer.appendChild(showBeerTable)

    
    let number = Math.floor(Math.random() * 4) + 1
    beerImageContainer.innerHTML = `<img src='./assets/images/beers/beer${number}.jpg'></img>`
    showBeerContainer.appendChild(beerImageContainer)

    addRemoveButton.id = 'action-button'
    addRemoveButton.innerText = 'Add Beer To Your List'
    showBeerContainer.appendChild(addRemoveButton)
    
    if (sessionStorage.length == 0) {
      addRemoveButton.innerText = 'Sign In To Start Adding Beers!'
    }

    if (sessionStorage.length > 0) {
      for (let x of Beer.currentUserBeers) {
        if (this.id === x.id) {
          console.log('yes')
          addRemoveButton.innerText = 'Remove Beer From Your List'
        }
      }
    }

    if (addRemoveButton.innerText == 'Sign In To Start Adding Beers!') {
      addRemoveButton.addEventListener('click', () => {
        showBeerContainer.remove()
        userSignInPortal()
      })
    } else if (addRemoveButton.innerText == 'Remove Beer From Your List') {
      // delete
    } else if (addRemoveButton.innerText == 'Add Beer To Your List') {
      // create
    }
  }

  createBeerRows(table) {
    let newRow = document.createElement('tr')
    
    let brandCell = document.createElement('td')
    let nameCell = document.createElement('td')
    let styleCell = document.createElement('td')
    let hopCell = document.createElement('td')
    let yeastCell = document.createElement('td')
    let maltsCell = document.createElement('td')
    let ibuCell = document.createElement('td')
    let abvCell = document.createElement('td')
    let blgCell = document.createElement('td')
    
    brandCell.innerText = this.brand
    nameCell.innerText = this.name
    styleCell.innerText = this.style
    hopCell.innerText = this.hop
    yeastCell.innerText = this.yeast
    maltsCell.innerText = this.malts
    ibuCell.innerText = this.ibu
    abvCell.innerText = this.alcohol
    blgCell.innerText = this.blg

    newRow.appendChild(brandCell)
    newRow.appendChild(nameCell)
    newRow.appendChild(styleCell)
    newRow.appendChild(hopCell)
    newRow.appendChild(yeastCell)
    newRow.appendChild(maltsCell)
    newRow.appendChild(ibuCell)
    newRow.appendChild(abvCell)
    newRow.appendChild(blgCell)

    table.appendChild(newRow)

    newRow.addEventListener('mouseover', () => {
      newRow.style.color = 'white'
      newRow.style.backgroundColor = 'rgba(27, 8, 1, .7)'
      newRow.style.cursor = 'pointer'
    })

    newRow.addEventListener('mouseout', () => {
      newRow.style.color = 'black'
      newRow.style.cursor = 'default'
      newRow.style.backgroundColor = 'white'
    })

    newRow.addEventListener('click', () => {
      this.show()
    })
  }

  // create join id
  // delete join id
}

function createTableHeaders(table) {
  let brandHeader = document.createElement('th')
  let nameHeader = document.createElement('th')
  let styleHeader = document.createElement('th')
  let hopHeader = document.createElement('th')
  let yeastHeader = document.createElement('th')
  let maltsHeader = document.createElement('th')
  let ibuHeader = document.createElement('th')
  let abvHeader = document.createElement('th')
  let blgHeader = document.createElement('th') 
  
  brandHeader.innerText = 'Brand' 
  nameHeader.innerText = 'Name'
  styleHeader.innerText = 'Style' 
  hopHeader.innerText = 'Hop' 
  yeastHeader.innerText = 'Yeast' 
  maltsHeader.innerText = 'Malts' 
  ibuHeader.innerText = 'IBU' 
  abvHeader.innerText = 'ABV%' 
  blgHeader.innerText = 'BLG°'
  
  table.appendChild(brandHeader)
  table.appendChild(nameHeader)
  table.appendChild(styleHeader)
  table.appendChild(hopHeader)
  table.appendChild(yeastHeader)
  table.appendChild(maltsHeader)
  table.appendChild(ibuHeader)
  table.appendChild(abvHeader)
  table.appendChild(blgHeader)
  
  mainContainer.appendChild(table)
}



