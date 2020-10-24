function fetchGenerateBeer() {
    fetch(`http://localhost:3000/beers`, { 
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(fetchedBeer => showRandom(fetchedBeer))
}