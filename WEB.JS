document.addEventListener('DOMContentLoaded', function() {
    const footballGamesList = document.getElementById('football-games-list');
    const basketballGamesList = document.getElementById('basketball-games-list');

    const footballGames = [
        { id: 1, name: 'משחק כדורגל 1 - ישראל', time: '2024-06-01T18:00:00', link: 'https://example.com/football1' },
        { id: 2, name: 'משחק כדורגל 2 - מחו"ל', time: '2024-06-01T20:00:00', link: 'https://example.com/football2' },
        { id: 3, name: 'משחק כדורגל 3 - ישראל', time: '2024-06-01T22:00:00', link: 'https://example.com/football3' }
    ];

    const basketballGames = [
        { id: 1, name: 'משחק כדורסל 1 - ישראל', time: '2024-06-01T18:00:00', link: 'https://example.com/basketball1' },
        { id: 2, name: 'משחק כדורסל 2 - מחו"ל', time: '2024-06-01T20:00:00', link: 'https://example.com/basketball2' },
        { id: 3, name: 'משחק כדורסל 3 - ישראל', time: '2024-06-01T22:00:00', link: 'https://example.com/basketball3' }
    ];

    function addGames(games, container) {
        games.forEach(game => {
            const gameElement = document.createElement('div');
            gameElement.className = 'game';
            gameElement.innerHTML = `
                <h2>${game.name}</h2>
                <p>זמן: ${new Date(game.time).toLocaleString()}</p>
            `;

            const watchButton = document.createElement('button');
            watchButton.textContent = 'צפה במשחק';
            watchButton.onclick = function() {
                window.open(game.link, '_blank');
            };
            gameElement.appendChild(watchButton);

            container.appendChild(gameElement);
        });
    }

    addGames(footballGames, footballGamesList);
    addGames(basketballGames, basketballGamesList);
});
