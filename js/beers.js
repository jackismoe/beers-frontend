class Beer {
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
}

function createBeerObj(beer) {
  let newBeer = new Beer(beer.id, beer.brand, beer.name, beer.style, beer.hop, beer.yeast, beer.malts, beer.ibu, beer.alcohol, beer.blg)

  let configObject = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(newBeer)
  }
  fetch('http://localhost:3000/beers', configObject)
    .then(response => response.json())
    .then(jsonResponse => console.log(jsonResponse))
    .catch(error => {
      alert(error.message)
    })

}

function createBeerTable() {
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
}

function renderAll() {
  profileContainer.remove()  
  if (beersTable.innerHTML == '') {
    createBeerTable()
    // beers
    fetch(`http://localhost:3000/all_beers`)
    .then(response => response.json())
    .then(jsonResponse => {
      for (let x of jsonResponse) {
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
}

// need user parameter
function fetchGenerateBeer() {  
  // fetch post to user/user_id/beers for beers#create 
    fetch(`http://localhost:3000/users/${sessionStorage.user_id}/beers`, { 
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(fetchedBeer => console.log(fetchedBeer))
}

function setBeerRow(beer) {
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
      
      idCell.innerText = beer.id
      brandCell.innerText = beer.brand
      nameCell.innerText = beer.name
      styleCell.innerText = beer.style
      hopCell.innerText = beer.hop
      yeastCell.innerText = beer.yeast
      maltsCell.innerText = beer.malts
      ibuCell.innerText = beer.ibu
      abvCell.innerText = beer.alcohol
      blgCell.innerText = beer.blg
      
      beersTable.appendChild(newRow)
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