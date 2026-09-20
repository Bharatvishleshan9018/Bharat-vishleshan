const data = [];

function render(items = data) {
  const grid = document.getElementById("grid");

  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="empty">
        <h3>अभी कोई Article उपलब्ध नहीं है</h3>
        <p>नए Articles जल्द ही यहाँ प्रकाशित किए जाएंगे।</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map(a => `
    <article class="article">
      <div class="article-img">${a[0]}</div>

      <div class="article-body">
        <small>${a[0]}</small>
        <h3>${a[1]}</h3>
        <p>${a[2]}</p>
        <a class="read" href="${a[3]}">पूरा पढ़ें →</a>
      </div>
    </article>
  `).join("");
}

function searchArticles() {
  const input = document.getElementById("q");
  const q = (input?.value || "").toLowerCase().trim();

  render(
    data.filter(a =>
      a.join(" ").toLowerCase().includes(q)
    )
  );
}

function toggleSearch() {
  const search = document.getElementById("search");
  if (search) search.classList.toggle("open");
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu) menu.classList.toggle("open");
}

render();
