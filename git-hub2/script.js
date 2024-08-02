const top20Games = [
    {
      id: 1,
      name: "The Legend of Zelda: Breath of the Wild",
      company: "Nintendo",
      data: {
        releaseYear: 2017,
        genre: "Action-Adventure"
      },
      img: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg"
    },
    {
      id: 2,
      name: "The Last of Us Part II",
      company: "Naughty Dog",
      data: {
        releaseYear: 2020,
        genre: "Action-Adventure"
      },
      img: "https://m.media-amazon.com/images/M/MV5BODUwNWY5YjctNDZkNy00ZTY1LWEzMzItZGVkYTllOWVjOTc3XkEyXkFqcGdeQXVyNjU4NTIxNzI@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 3,
      name: "Red Dead Redemption 2",
      company: "Rockstar Games",
      data: {
        releaseYear: 2018,
        genre: "Action-Adventure"
      },
      img: "https://upload.wikimedia.org/wikipedia/ru/0/03/Red_Dead_Redemption_2_coverart.jpg"
    },
    {
      id: 4,
      name: "God of War Ragnarök",
      company: "Santa Monica Studio",
      data: {
        releaseYear: 2022,
        genre: "Action-Adventure"
      },
      img: "https://upload.wikimedia.org/wikipedia/ru/6/6e/God_of_War-_Ragnar%C3%B6k.jpg"
    },
    {
      id: 5,
      name: "Elden Ring",
      company: "FromSoftware",
      data: {
        releaseYear: 2022,
        genre: "Action RPG"
      },
      img: "https://upload.wikimedia.org/wikipedia/ru/thumb/7/7c/Elden_Ring_-_cover.jpg/411px-Elden_Ring_-_cover.jpg"
    },
    {
      id: 6,
      name: "Minecraft",
      company: "Mojang Studios",
      data: {
        releaseYear: 2011,
        genre: "Sandbox"
      },
      img: "https://upload.wikimedia.org/wikipedia/ru/f/f4/Minecraft_Cover_Art.png"
    },
    {
      id: 7,
      name: "Grand Theft Auto V",
      company: "Rockstar Games",
      data: {
        releaseYear: 2013,
        genre: "Action-Adventure"
      },
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Rockstar_Games_Logo.svg/300px-Rockstar_Games_Logo.svg.png"
    },
    {
      id: 8,
      name: "Hades",
      company: "Supergiant Games",
      data: {
        releaseYear: 2020,
        genre: "Rogue-like"
      },
      img: "https://upload.wikimedia.org/wikipedia/ru/c/cc/Hades_cover_art.jpg"
    },
    {
      id: 9,
      name: "Sekiro: Shadows Die Twice",
      company: "FromSoftware",
      data: {
        releaseYear: 2019,
        genre: "Action-Adventure"
      },
      img: "https://upload.wikimedia.org/wikipedia/ru/thumb/a/a8/Sekiro_Shadows_Die_Twice.jpg/411px-Sekiro_Shadows_Die_Twice.jpg"
    },
    {
      id: 10,
      name: "Cyberpunk 2077",
      company: "CD Projekt Red",
      data: {
        releaseYear: 2020,
        genre: "Action RPG"
      },
      img: "https://upload.wikimedia.org/wikipedia/ru/thumb/b/bb/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D0%BE%D0%B9_%D0%B8%D0%B3%D1%80%D1%8B_Cyberpunk_2077.jpg/411px-%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D0%BE%D0%B9_%D0%B8%D0%B3%D1%80%D1%8B_Cyberpunk_2077.jpg"
    },
    {
      id: 11,
      name: "The Witcher 3: Wild Hunt",
      company: "CD Projekt Red",
      data: {
        releaseYear: 2015,
        genre: "Action RPG"
      },
      img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg"
    },
    {
      id: 12,
      name: "Super Mario Odyssey",
      company: "Nintendo",
      data: {
        releaseYear: 2017,
        genre: "Platformer"
      },
      img: "https://upload.wikimedia.org/wikipedia/ru/thumb/e/e4/Super_Mario_Odyssey_box.jpg/369px-Super_Mario_Odyssey_box.jpg"
    },
    {
      id: 13,
      name: "Apex Legends",
      company: "Respawn Entertainment",
      data: {
        releaseYear: 2019,
        genre: "Battle Royale"
      },
      img: "https://upload.wikimedia.org/wikipedia/en/d/db/Apex_legends_cover.jpg"
    },
    {
      id: 14,
      name: "Overwatch",
      company: "Blizzard Entertainment",
      data: {
        releaseYear: 2016,
        genre: "First-Person Shooter"
      },
      img: "https://upload.wikimedia.org/wikipedia/ru/thumb/3/33/Overwatch_Origins_Edition_PC_cover.jpg/411px-Overwatch_Origins_Edition_PC_cover.jpg"
    },
    {
      id: 15,
      name: "Fortnite",
      company: "Epic Games",
      data: {
        releaseYear: 2017,
        genre: "Battle Royale"
      },
      img: "https://m.media-amazon.com/images/M/MV5BNzU2YTY2OTgtZGZjZi00MTAyLThlYjUtMWM5ZmYzOGEyOWJhXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 16,
      name: "Among Us",
      company: "Innersloth",
      data: {
        releaseYear: 2018,
        genre: "Social Deduction"
      },
      img: "https://upload.wikimedia.org/wikipedia/en/9/9a/Among_Us_cover_art.jpg"
    },
    {
      id: 17,
      name: "Halo Infinite",
      company: "343 Industries",
      data: {
        releaseYear: 2021,
        genre: "First-Person Shooter"
      },
      img: "https://upload.wikimedia.org/wikipedia/ru/thumb/d/d6/Halo_infinite_cover.png/274px-Halo_infinite_cover.png"
    },
    {
      id: 18,
      name: "Demon's Souls",
      company: "Bluepoint Games",
      data: {
        releaseYear: 2020,
        genre: "Action RPG"
      },
      img: "https://upload.wikimedia.org/wikipedia/ru/2/2a/Demon%27s_Souls_%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%B8%D0%B3%D1%80%D1%8B.jpg"
    },
    {
      id: 19,
      name: "Deathloop",
      company: "Arkane Studios",
      data: {
        releaseYear: 2021,
        genre: "First-Person Shooter"
      },
      img: "https://upload.wikimedia.org/wikipedia/ru/9/9a/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Deathloop.jpg"
    },
    {
      id: 20,
      name: "Control",
      company: "Remedy Entertainment",
      data: {
        releaseYear: 2019,
        genre: "Action-Adventure"
      },
      img: "https://upload.wikimedia.org/wikipedia/ru/1/16/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%B8%D0%B3%D1%80%D1%8B_Control.jpg"
    }
  ];
function displayGames(games) {
    const container = document.getElementById('game-container');
    container.innerHTML = '';

    games.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <img src="${game.img}" alt="${game.name}">
            <div class="game-card-content">
                <h5 class="game-card-title">${game.name}</h5>
                <p class="game-card-text">Company: ${game.company}</p>
                <p class="game-card-text">Release Year: ${game.data.releaseYear}</p>
                <p class="game-card-text">Genre: ${game.data.genre}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterGames(searchTerm) {
    const filteredGames = top20Games.filter(game =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayGames(filteredGames);
}

document.getElementById('search').addEventListener('input', (event) => {
    filterGames(event.target.value);
});


displayGames(top20Games);
