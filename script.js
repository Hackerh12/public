document.getElementById('searchButton').addEventListener('click', async () => {
  const query = document.getElementById('searchInput').value;
  const response = await fetch(`/search?query=${encodeURIComponent(query)}`);
  const data = await response.json();
  
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  if (data.Response === 'True') {
    data.Search.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.innerHTML = `
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
        <img src="${movie.Poster}" alt="${movie.Title}" width="100">
      `;
      resultsDiv.appendChild(movieElement);
    });
  } else {
    resultsDiv.innerHTML = `<p>${data.Error}</p>`;
  }
});