const form = document.getElementById("podcast-form");
const podcastList = document.getElementById("podcast-list");

// Função para carregar os podcasts
async function loadPodcasts() {
  const response = await fetch("/api/podcasts");
  const podcasts = await response.json();

  podcastList.innerHTML = ""; // Limpa a lista
  podcasts.forEach((podcast) => {
    const div = document.createElement("div");
    div.className = "podcast-item";
    div.innerHTML = `
      <h3>${podcast.title}</h3>
      <p>${podcast.description}</p>
    `;
    podcastList.appendChild(div);
  });
}

// Evento para adicionar um novo podcast
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  const response = await fetch("/api/podcasts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description }),
  });

  if (response.ok) {
    form.reset();
    loadPodcasts(); // Recarrega a lista após adicionar
  }
});

// Carrega os podcasts ao carregar a página
loadPodcasts();