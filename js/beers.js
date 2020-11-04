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
  
  allBeersTable.appendChild(idHeader)
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
  if (allBeersTable.innerHTML == '') {
    createBeerTable()
    // beers
    fetch(`http://localhost:3000/all_beers`)
    .then(response => response.json())
    .then(jsonResponse => {
      for (let x of jsonResponse) {
        let newRow = document.createElement('tr')
        allBeersTable.appendChild(newRow)
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
  } else {
    mainContainer.appendChild(allBeersTable)
  }
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
      
      allBeersTable.appendChild(newRow)
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