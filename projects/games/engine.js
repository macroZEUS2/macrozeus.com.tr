const params = new URLSearchParams(location.search);
const id = params.get("id");

fetch("data/games.json")
    .then(r => r.json())
    .then(list => {
        const game = list.find(g => g.id === id);
        if (!game) {
            document.body.innerHTML = "<p style='color:white;text-align:center;margin-top:40px'>Oyun bulunamadı.</p>";
            return;
        }

        document.title = game.title;
        const container = document.getElementById("game-frame");

        if (game.type === "swf") {
            const ruffle = window.RufflePlayer.newest();
            const player = ruffle.createPlayer();
            player.style.width = "100%";
            player.style.height = "100%";
            container.appendChild(player);
            player.load(game.file);
        } else if (game.type === "html") {
            const iframe = document.createElement("iframe");
            iframe.src = game.file;
            iframe.allowFullscreen = true;
            container.appendChild(iframe);
        }
    });