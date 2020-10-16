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
      // beerId: beer.id,
      // beerBrand: beer.brand,
      // beerName: beer.name,
      // beerStyle: beer.style,
      // beerHop: beer.hop,
      // beerYeast: beer.yeast,
      // beerMalts: beer.malts,
      // beerIbu: beer.ibu,
      // beerAlcohol: beer.alcohol,
      // beerBlg: beer.blg
  }
  fetch('http://localhost:3000/beers', configObject)
    .then(response => response.json())
    .then(jsonResponse => console.log(jsonResponse))
    .catch(error => {
      alert(error.message)
    })

}