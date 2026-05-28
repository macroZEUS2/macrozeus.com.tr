fetch("data/games.json")
    .then(r => r.json())
    .then(games => {
        const list = document.getElementById("gameList");

        games.forEach(g => {
            const card = document.createElement("div");
            card.className = "game-card";

            const img = document.createElement("img");
            img.src = g.thumb;
            img.alt = g.title;

            const details = document.createElement("div");
            details.className = "game-card-details";

            const title = document.createElement("h3");
            title.textContent = g.title;

            const btn = document.createElement("a");
            btn.textContent = "Oyna";
            btn.href = `game.html?id=${g.id}`;

            details.appendChild(title);
            details.appendChild(btn);
            card.appendChild(img);
            card.appendChild(details);
            list.appendChild(card);
        });
    });