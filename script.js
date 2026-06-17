const articles = [
  {
    titre: "Reportage : Développement agricole: le riz désormais cultivé au GABON",
    resume: "Un regard sur les initiatives locales pour limiter les importations…",
    image: "images/riz.jpg",
    lien: "#"
  },
  {
    titre: "Reportage : Infrastructures routières au Gabon",
    resume: "Analyse des projets en cours pour améliorer la mobilité dans les régions intérieures…",
    image: "images/routes.jpg",
    lien: "#"
  }
];

window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("articles-container");
  articles.forEach(article => {
    const art = document.createElement("article");
    art.innerHTML = `
      <img src="${article.image}" class="news-img" alt="">
      <h3>${article.titre}</h3>
      <p>${article.resume}</p>
      <a href="${article.lien}">Lire l’article complet →</a>
    `;
    container.appendChild(art);
  });
});
