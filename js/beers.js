class Beer {
  static allBeers = []
  static currentUserBeers = []
  static viewed = []

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
      if (Beer.currentUserBeers.length == 0) {
        for (let x of jsonResponse) {
          let newBeer = new Beer(x.id, x.brand, x.name, x.style, x.hop, x.yeast, x.malts, x.ibu, x.alcohol, x.blg)
          Beer.currentUserBeers.push(newBeer)
        }
      }
    })
  }

  static renderAll() {
    pageHeader.innerText = 'All Beers'
    if (allBeersTable.rows.length == 0) {
      createTable(allBeersTable, Beer.allBeers)
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
        let newBeer= new Beer(fetchedBeer.id, fetchedBeer.brand, fetchedBeer.name, fetchedBeer.style, fetchedBeer.hop, fetchedBeer.yeast, fetchedBeer.malts, fetchedBeer.alcohol, fetchedBeer.ibu, fetchedBeer.blg)
        Beer.currentUserBeers.push(newBeer)
        Beer.allBeers.push(newBeer)
        if (userBeersTable.rows.length == 0) {
          welcomeParagraph.remove()
          createTable(userBeersTable, Beer.currentUserBeers)
        } else {
          newBeer.createNewRow(userBeersTable)
        }
      })
      allBeersTable.remove()
      homeDescriptionContainer.remove()
      editUserContainer.remove()

      showUser()
    }

  // instance
  show() {
    allBeersTable.remove()
    userBeersTable.remove()
    pageHeader.innerText = `${this.brand} ${this.name}`

    Beer.viewed.push(this)
    showBeerTable.innerHTML = `<th>ID</th>
                              <th>Brand</th>
                              <th>Name</th>
                              <th>Style</th>
                              <th>Hop</th>
                              <th>Yeast</th>
                              <th>Malts</th>
                              <th>IBU</th>
                              <th>ABV%</th>
                              <th>BLG°</th>
                              <tr>
                                <td>${this.id}</td>
                                <td>${this.brand}</td>
                                <td>${this.name}</td>
                                <td>${this.style}</td>
                                <td>${this.hop}</td>
                                <td>${this.yeast}</td>
                                <td>${this.malts}</td>
                                <td>${this.ibu}</td>
                                <td>${this.alcohol}</td>
                                <td>${this.blg}</td>
                              </tr>`

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
      addRemoveButton.addEventListener('click', () => {
        this.removeBeer()
      })
    } else if (addRemoveButton.innerText == 'Add Beer To Your List') {
      addRemoveButton.addEventListener('click', () => {
        this.addBeer()
      })
    }
  } 

  removeBeer() {
    fetch(`${BASE_URL}/beers_users/${this.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        beer: this, 
        session: sessionStorage
      })
    })
    .then(response => response.json())
    .then(jsonResponse => {
      for (let x of userBeersTable.rows) {
        if ((x.innerText.includes(this.id)) && (x.innerText.includes(this.brand))) {
          x.remove()
          let oneLess = Beer.currentUserBeers.filter(beer => beer.id !== this.id)
          if (oneLess.length == (Beer.currentUserBeers.length -1)) {
            Beer.currentUserBeers = oneLess
          }
        }
      }
      if (userBeersTable.rows.length == 0) {
        userBeersTable.remove()
        mainContainer.appendChild(welcomeParagraph)
      }
      showUser()
    })
  }

  addBeer() {
    fetch(`${BASE_URL}/beers_users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        beer: this, 
        session: sessionStorage
      })
    })
    .then(response => response.json())
    .then(jsonResponse => {
      Beer.currentUserBeers.push(this)
      if (userBeersTable.rows.length > 0) {
        this.createNewRow(userBeersTable)
      } else if (!userBeersTable.rows.length > 0) {
        createTable(userBeersTable, Beer.currentUserBeers)
        this.createNewRow(userBeersTable)
      }
      showUser()
    })
  }

  createNewRow(table) {
    let newRow = document.createElement('tr')
    
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
    
    idCell.innerText = this.id
    brandCell.innerText = this.brand
    nameCell.innerText = this.name
    styleCell.innerText = this.style
    hopCell.innerText = this.hop
    yeastCell.innerText = this.yeast
    maltsCell.innerText = this.malts
    ibuCell.innerText = this.ibu
    abvCell.innerText = this.alcohol
    blgCell.innerText = this.blg

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
    table.appendChild(newRow)
  }
}

function createTable(table, array) {
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
  
  idHeader.innerText = 'ID'
  brandHeader.innerText = 'Brand' 
  nameHeader.innerText = 'Name'
  styleHeader.innerText = 'Style' 
  hopHeader.innerText = 'Hop' 
  yeastHeader.innerText = 'Yeast' 
  maltsHeader.innerText = 'Malts' 
  ibuHeader.innerText = 'IBU' 
  abvHeader.innerText = 'ABV%' 
  blgHeader.innerText = 'BLG°'
  
  table.appendChild(idHeader)
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

  for (let x of array) {
    x.createNewRow(table)
  }
}

