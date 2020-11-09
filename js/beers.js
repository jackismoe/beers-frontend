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
  
  // idHeader.innerText = 'Beer ID'
  brandHeader.innerText = 'Brand' 
  nameHeader.innerText = 'Name'
  styleHeader.innerText = 'Style' 
  hopHeader.innerText = 'Hop' 
  yeastHeader.innerText = 'Yeast' 
  maltsHeader.innerText = 'Malts' 
  ibuHeader.innerText = 'IBU' 
  abvHeader.innerText = 'ABV%' 
  blgHeader.innerText = 'BLG°'

  idHeader.id = 'id-header'
  blgHeader.id = 'blg-header'
  
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
  sliderContainer.remove()
  pageHeader.innerText = 'All Beers'
  if (allBeersTable.innerHTML == '') {
    createBeerTable()
    // beers
    fetch(`http://localhost:3000/all_beers`)
    .then(response => response.json())
    .then(jsonResponse => {
      for (let x of jsonResponse) {
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
      .then(fetchedBeer => {
// show just the recently created beer
        showBeer(fetchedBeer)
      })
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

function showBeer(beer) {
  // generate random beer image
  allBeersTable.remove()
  userBeersTable.remove()
  homeDescriptionContainer.remove()
  profileContainer.remove()
  sliderContainer.remove()
  
  let beerBrand
  let beerName 
  let beerStyle
  let beerHop 
  let beerYeast
  let beerMalts
  let beerIbu 
  let beerAbv 
  let beerBlg
  
  if (beer.id == undefined) {
    let beerArray = []
    for (let x of beer) {
      beerArray.push(x.innerText)
    }
    beerBrand = beerArray[1]
    beerName = beerArray[2]
    beerStyle = beerArray[3]
    beerHop = beerArray[4]
    beerYeast = beerArray[5]
    beerMalts = beerArray[6]
    beerIbu = beerArray[7]
    beerAbv = beerArray[8]
    beerBlg = beerArray[9]
  } else {
    beerBrand = beer.brand
    beerName = beer.name
    beerStyle = beer.style
    beerHop = beer.hop
    beerYeast = beer.yeast
    beerMalts = beer.malts
    beerIbu = beer.ibu
    beerAbv = beer.alcohol
    beerBlg = beer.blg
  }
  
  pageHeader.innerText = `${beerBrand} ${beerName}`
  let beerBrandH3 = document.createElement('h3')
  let beerNameH3 = document.createElement('h3')
  let beerStyleH4 = document.createElement('h4')
  let beerHopP = document.createElement('p')
  let beerYeastP = document.createElement('p')
  let beerMaltsP = document.createElement('p')
  let beerIbuP = document.createElement('p')
  let beerAbvP = document.createElement('p')
  let beerBlgP = document.createElement('p')

  beerBrandH3.innerText = beerBrand
  beerNameH3.innerText = beerName
  beerStyleH4.innerText = beerStyle
  beerHopP.innerText = `Hop: ${beerHop}`
  beerYeastP.innerText = `Yeast: ${beerYeast}`
  beerMaltsP.innerText = `Malts: ${beerMalts}`
  beerIbuP.innerText = `IBU: ${beerIbu}`
  beerAbvP.innerText = `ABV%: ${beerAbv}`
  beerBlgP.innerText = `BLG: ${beerBlg}`

  let beerImageContainer = document.createElement('img')
  beerImageContainer.innerHTML = `<img src="./assets/images/beers/beer1.jpg" width='auto'></img>`

  mainContainer.appendChild(showBeerContainer)
  showBeerContainer.appendChild(beerImageContainer)
  showBeerContainer.appendChild(beerBrandH3)
  showBeerContainer.appendChild(beerNameH3)
  showBeerContainer.appendChild(beerStyleH4)
  showBeerContainer.appendChild(beerHopP)
  showBeerContainer.appendChild(beerYeastP)
  showBeerContainer.appendChild(beerMaltsP)
  showBeerContainer.appendChild(beerIbuP)
  showBeerContainer.appendChild(beerAbvP)
  showBeerContainer.appendChild(beerBlgP)
}