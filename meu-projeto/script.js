

async function buscar() {
  const query = document.getElementById('busca').value;

  const res = await fetch(`https://www.omdbapi.com/?apikey=thewdb&s=${query}`);
  const data = await res.json();

  const div = document.getElementById('resultados');
  div.innerHTML = "";

  if (data.Search) {
    data.Search.forEach(filme => {
      div.innerHTML += `
        <div class="filme">
          <img src="${filme.Poster}">
          <p>${filme.Title}</p>
        </div>
      `;
    });
  } else {
    div.innerHTML = "<p>Nenhum resultado encontrado</p>";
  }
}