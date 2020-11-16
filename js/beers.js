class Beer {
  static beerArray = []
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
    
    Beer.beerArray.push(this)
  }

  static getAll() {
    return this.beerArray
  }

  // static
    seeName() {
      return this.name
    }
}

function createBeerTable() {
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

  blgHeader.id = 'blg-header'
  
  allBeersTable.appendChild(brandHeader)
  allBeersTable.appendChild(nameHeader)
  allBeersTable.appendChild(styleHeader)
  allBeersTable.appendChild(hopHeader)
  allBeersTable.appendChild(yeastHeader)
  allBeersTable.appendChild(maltsHeader)
  allBeersTable.appendChild(ibuHeader)
  allBeersTable.appendChild(abvHeader)
  allBeersTable.appendChild(blgHeader)
  
  main.appendChild(allBeersTable)
}

function renderAll() {
  profileContainer.remove()  
  sliderContainer.remove()
  pageHeader.innerText = 'All Beers'
  // beers
  fetch(`http://localhost:3000/all_beers`)
  .then(response => response.json())
  .then(jsonResponse => {
    function populateTable() {
      for (let x of jsonResponse) {
        let newRow = document.createElement('tr')
        allBeersTable.appendChild(newRow)

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

        newRow.addEventListener('click', (e) => {
          row = e.target.parentElement.childNodes
          showBeer(row)
        })

        let brandCell = document.createElement('td')
        let nameCell = document.createElement('td')
        let styleCell = document.createElement('td')
        let hopCell = document.createElement('td')
        let yeastCell = document.createElement('td')
        let maltsCell = document.createElement('td')
        let ibuCell = document.createElement('td')
        let abvCell = document.createElement('td')
        let blgCell = document.createElement('td')
        
        brandCell.className = 'beer-brand'
        nameCell.className = 'beer-name'
        styleCell.className = 'beer-style'
        hopCell.className = 'beer-hop'
        yeastCell.className = 'beer-yeast'
        maltsCell.className = 'beer-malts'
        ibuCell.className = 'beer-ibu'
        abvCell.className = 'beer-abv'
        blgCell.className = 'beer-blg'
        
        brandCell.innerText = x.brand
        nameCell.innerText = x.name
        styleCell.innerText = x.style
        hopCell.innerText = x.hop
        yeastCell.innerText = x.yeast
        maltsCell.innerText = x.malts
        ibuCell.innerText = x.ibu
        abvCell.innerText = x.alcohol
        blgCell.innerText = x.blg
        
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
    }
      if ((allBeersTable.rows.length <= 1) && (allCounter < 1)) {
        console.log('a')
        createBeerTable()
        populateTable()
        let newRow = document.createElement('tr')
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

        newRow.addEventListener('click', (e) => {
          row = e.target.parentElement.childNodes
          showBeer(row)
        })
        let brandCell = document.createElement('td')
        let nameCell = document.createElement('td')
        let styleCell = document.createElement('td')
        let hopCell = document.createElement('td')
        let yeastCell = document.createElement('td')
        let maltsCell = document.createElement('td')
        let ibuCell = document.createElement('td')
        let abvCell = document.createElement('td')
        let blgCell = document.createElement('td')
        
        brandCell.className = 'beer-brand'
        nameCell.className = 'beer-name'
        styleCell.className = 'beer-style'
        hopCell.className = 'beer-hop'
        yeastCell.className = 'beer-yeast'
        maltsCell.className = 'beer-malts'
        ibuCell.className = 'beer-ibu'
        abvCell.className = 'beer-abv'
        blgCell.className = 'beer-blg'
        
        brandCell.innerText = jsonResponse[jsonResponse.length-1].brand
        nameCell.innerText = jsonResponse[jsonResponse.length-1].name
        styleCell.innerText = jsonResponse[jsonResponse.length-1].style
        hopCell.innerText = jsonResponse[jsonResponse.length-1].hop
        yeastCell.innerText = jsonResponse[jsonResponse.length-1].yeast
        maltsCell.innerText = jsonResponse[jsonResponse.length-1].malts
        ibuCell.innerText = jsonResponse[jsonResponse.length-1].ibu
        abvCell.innerText = jsonResponse[jsonResponse.length-1].alcohol
        blgCell.innerText = jsonResponse[jsonResponse.length-1].blg
        
        newRow.appendChild(brandCell) 
        newRow.appendChild(nameCell) 
        newRow.appendChild(styleCell) 
        newRow.appendChild(hopCell) 
        newRow.appendChild(yeastCell) 
        newRow.appendChild(maltsCell) 
        newRow.appendChild(ibuCell)
        newRow.appendChild(abvCell) 
        newRow.appendChild(blgCell)

        mainContainer.appendChild(allBeersTable)
        allCounter++
      } else {
        console.log('b')
        mainContainer.appendChild(allBeersTable)
      }
  })
}

function fetchGenerateBeer() {  
    fetch(`http://localhost:3000/users/${sessionStorage.user_id}/beers`, { 
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(fetchedBeer => {
        let newBeer = new Beer(fetchedBeer.id, fetchedBeer.brand, fetchedBeer.name, fetchedBeer.style, fetchedBeer.hop, fetchedBeer.yeast, fetchedBeer.malts, fetchedBeer.ibu, fetchedBeer.alcohol, fetchedBeer.blg)

// show just the recently created beer
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
        
        brandCell.className = 'beer-brand'
        nameCell.className = 'beer-name'
        styleCell.className = 'beer-style'
        hopCell.className = 'beer-hop'
        yeastCell.className = 'beer-yeast'
        maltsCell.className = 'beer-malts'
        ibuCell.className = 'beer-ibu'
        abvCell.className = 'beer-abv'
        blgCell.className = 'beer-blg'
        
        brandCell.innerText = newBeer.brand
        nameCell.innerText = newBeer.name
        styleCell.innerText = newBeer.style
        hopCell.innerText = newBeer.hop
        yeastCell.innerText = newBeer.yeast
        maltsCell.innerText = newBeer.malts
        ibuCell.innerText = newBeer.ibu
        abvCell.innerText = newBeer.alcohol
        blgCell.innerText = newBeer.blg
        
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
        
        newRow.addEventListener('click', (e) => {
          row = e.target.parentElement.childNodes
          showBeer(row)
        })   

        checkNewRow(newRow, newBeer)
      })
}

function checkNewRow(row, beer) {
  showUser(currentUser)
  allBeersTable.appendChild(row)
  allBeersTable.remove()
  userBeersTable.appendChild(row)
  row.scrollIntoView(true)
  row.style.backgroundColor = 'rgba(27, 8, 1, .7)'
}

function setBeerRow(beer) {
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
      
      brandCell.className = 'beer-brand'
      nameCell.className = 'beer-name'
      styleCell.className = 'beer-style'
      hopCell.className = 'beer-hop'
      yeastCell.className = 'beer-yeast'
      maltsCell.className = 'beer-malts'
      ibuCell.className = 'beer-ibu'
      abvCell.className = 'beer-abv'
      blgCell.className = 'beer-blg'
      
      brandCell.innerText = beer.brand
      nameCell.innerText = beer.name
      styleCell.innerText = beer.style
      hopCell.innerText = beer.hop
      yeastCell.innerText = beer.yeast
      maltsCell.innerText = beer.malts
      ibuCell.innerText = beer.ibu
      abvCell.innerText = beer.alcohol
      blgCell.innerText = beer.blg
      
      allBeersTable.appendChild(newRow)
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

function showBeer(beer) {
  // generate random beer image
  allBeersTable.remove()
  userBeersTable.remove()
  homeDescriptionContainer.remove()
  profileContainer.remove()
  sliderContainer.remove()
  editUserContainer.remove()
  
  let beerBrand
  let beerName 
  let beerStyle
  let beerHop 
  let beerYeast
  let beerMalts
  let beerIbu 
  let beerAbv 
  let beerBlg
  let beerArray = []

  if (beer !== undefined) {
    for (let x of beer) {
      beerArray.push(x.innerText)
      console.log(x)
    }
    console.log(beerArray)
    beerBrand = beerArray[0]
    beerName = beerArray[1]
    beerStyle = beerArray[2]
    beerHop = beerArray[3]
    beerYeast = beerArray[4]
    beerMalts = beerArray[5]
    beerIbu = beerArray[6]
    beerAbv = beerArray[7]
    beerBlg = beerArray[8]
  } else {
    beerBrand = beer.brand
    beerName = beer.seeName()
    beerStyle = beer.style
    beerHop = beer.hop
    beerYeast = beer.yeast
    beerMalts = beer.malts
    beerIbu = beer.ibu
    beerAbv = beer.alcohol
    beerBlg = beer.blg
  }
  
  pageHeader.innerText = `${beerBrand} ${beerName}`

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
  
  brandCell.className = 'beer-brand'
  nameCell.className = 'beer-name'
  styleCell.className = 'beer-style'
  hopCell.className = 'beer-hop'
  yeastCell.className = 'beer-yeast'
  maltsCell.className = 'beer-malts'
  ibuCell.className = 'beer-ibu'
  abvCell.className = 'beer-abv'
  blgCell.className = 'beer-blg'

  brandCell.innerText = beerBrand
  nameCell.innerText = beerName
  styleCell.innerText = beerStyle
  hopCell.innerText = beerHop
  yeastCell.innerText = beerYeast
  maltsCell.innerText = beerMalts
  ibuCell.innerText = beerIbu
  abvCell.innerText = beerAbv
  blgCell.innerText = beerBlg
  
  
  let number = Math.floor(Math.random() * 4) + 1
  
  beerImageContainer.innerHTML = `<img src='./assets/images/beers/beer${number}.jpg'></img>`
  
  addRemoveButton.id = 'action-button'
  
  if (sessionStorage.length == 1) {
    fetch(`http://localhost:3000/users/${sessionStorage.user_id}/beers`)
    .then(response => response.json())
    .then(jsonResponse => {
      let trueCount = 0
      let falseCount = 0
      for (let x of jsonResponse) {
        if (beer[0]) {
          if ((beer[0].innerText == x.brand) && (beer[1].innerText == x.name)) {
            trueCount++
          }
        } else if (x.brand == beer.brand) {
          trueCount++ 
        } else {
          falseCount++
        } 
      }
      if (trueCount >= 1) {
        addRemoveButton.innerText = 'Remove Beer From Your List'
      } else {
        addRemoveButton.innerText = 'Add Beer To Your List'
      }
      if (addRemoveButton.innerText == 'Remove Beer From Your List') {
        addRemoveButton.addEventListener('click', () => {
          fetch(`http://localhost:3000/beers_users/${beer.id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              beerBrand: beerBrand,
              beerName: beerName,
              session: sessionStorage.user_id
            })
          })
          .then(response => response.json())
          .then(jsonResponse => {
            console.log(beer)
            for (let x of userBeersTable.rows) {
              for (let y of x.cells) {
                if ((jsonResponse.brand == y.innerText)) {
                  console.log(y)
                  x.remove()
                }
              }
            }
            showUser(currentUser)
          })
        })
      } else if (addRemoveButton.innerText == 'Add Beer To Your List') {
        addRemoveButton.addEventListener('click', () => {
          fetch(`http://localhost:3000/beers_users`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              beerBrand: beerBrand,
              beerName: beerName,
              session: sessionStorage
            })
          })
          .then(response => response.json())
          .then(jsonResponse => showUser(jsonResponse))
        })
      }
    })
  } else {
    addRemoveButton.innerText = 'Sign In To Add Beer To Your List'
    
    addRemoveButton.addEventListener('click', () => {
      showBeerContainer.remove()
      userSignInPortal()
    })
  }
  

  mainContainer.appendChild(showBeerContainer)
  if (showBeerContainer.children[1] == undefined) {
    showBeerTable.appendChild(brandHeader)
    showBeerTable.appendChild(nameHeader)
    showBeerTable.appendChild(styleHeader)
    showBeerTable.appendChild(hopHeader)
    showBeerTable.appendChild(yeastHeader)
    showBeerTable.appendChild(maltsHeader)
    showBeerTable.appendChild(ibuHeader)
    showBeerTable.appendChild(abvHeader)
    showBeerTable.appendChild(blgHeader)

    showBeerTable.appendChild(newRow)
    newRow.appendChild(brandCell) 
    newRow.appendChild(nameCell) 
    newRow.appendChild(styleCell) 
    newRow.appendChild(hopCell) 
    newRow.appendChild(yeastCell) 
    newRow.appendChild(maltsCell) 
    newRow.appendChild(ibuCell)
    newRow.appendChild(abvCell) 
    newRow.appendChild(blgCell)

    showBeerContainer.appendChild(showBeerTable)
    showBeerContainer.appendChild(beerImageContainer)
    showBeerContainer.appendChild(addRemoveButton)
  } else {
    brandCell.innerText = beerBrand
    nameCell.innerText = beerName
    styleCell.innerText = beerStyle
    hopCell.innerText = beerHop
    yeastCell.innerText = beerYeast
    maltsCell.innerText = beerMalts
    ibuCell.innerText = beerIbu
    abvCell.innerText = beerAbv
    blgCell.innerText = beerBlg
    
    newRow.appendChild(brandCell) 
    newRow.appendChild(nameCell) 
    newRow.appendChild(styleCell) 
    newRow.appendChild(hopCell) 
    newRow.appendChild(yeastCell) 
    newRow.appendChild(maltsCell) 
    newRow.appendChild(ibuCell)
    newRow.appendChild(abvCell) 
    newRow.appendChild(blgCell)

    showBeerTable.appendChild(newRow)
    showBeerTable.rows[0].remove()
    showBeerContainer.appendChild(beerImageContainer)
    showBeerContainer.appendChild(addRemoveButton)
  }
}