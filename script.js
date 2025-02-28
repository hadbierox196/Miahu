let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment slide index
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Remove "active" class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show current slide and set corresponding dot as active
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // Change image every 5 seconds
    setTimeout(showSlides, 2000);
}

function currentSlide(n) {
    slideIndex = n - 1; // Set slide index to chosen slide
    showSlides();
}

// Games data
const games = [
    { name: "Blind Ranking", image: "https://i.imgur.com/YGx7bmf.png", link: "https://blind-rank-ecru.vercel.app/", category: "tiktok" },
    { name: "Improve Player", image: "https://i.imgur.com/vzuWuYX.png", link: "https://improve-player.vercel.app/", category: "tiktok" },
    { name: "Build Team", image: "https://i.imgur.com/tgwa05O.png", link: "https://career-gamma.vercel.app/", category: "top" },
    { name: "Managerial Career", image: "https://i.imgur.com/sTtmJAg.png", link: "https://manager-career.vercel.app/", category: "tiktok" },
    { name: "Murder Mystery", image: "https://i.imgur.com/ymMxPhE.png", link: "https://murder-mystery-sable.vercel.app/", category: "tiktok" },
    { name: "Guess Player", image: "https://i.imgur.com/nMY9lv9.png", link: "https://guess-player.vercel.app/", category: "top" },
    { name: "Higher or Lower", image: "https://i.imgur.com/yHXeQ43.png", link: "https://higherorlower-sigma.vercel.app/", category: "top" },
    { name: "Double Team", image: "https://i.imgur.com/a5wcpVC.png", link: "https://double-team.vercel.app/", category: "tiktok" }
];

// Function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to display games
function displayGames() {
    const tiktokFilters = document.getElementById("tiktokFilters");
    const topRated = document.getElementById("topRated");

    // Clear previous content
    tiktokFilters.innerHTML = "";
    topRated.innerHTML = "";

    // Filter and display TikTok Filters
    const tiktokGames = games.filter(game => game.category === "tiktok");
    tiktokGames.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.className = "game-card";
        gameCard.innerHTML = `
            <a href="${game.link}" target="_blank">
                <img src="${game.image}" alt="${game.name}">
                <h3>${game.name}</h3>
            </a>
        `;
        tiktokFilters.appendChild(gameCard);
    });

    // Shuffle and display Top Rated
    const topGames = shuffleArray(games.filter(game => game.category === "top"));
    topGames.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.className = "game-card";
        gameCard.innerHTML = `
            <a href="${game.link}" target="_blank">
                <img src="${game.image}" alt="${game.name}">
                <h3>${game.name}</h3>
            </a>
        `;
        topRated.appendChild(gameCard);
    });
}

// Function to filter games based on search input
function filterGames() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredGames = games.filter(game => game.name.toLowerCase().includes(searchInput));

    // Clear previous content
    const tiktokFilters = document.getElementById("tiktokFilters");
    const topRated = document.getElementById("topRated");
    tiktokFilters.innerHTML = "";
    topRated.innerHTML = "";

    // Display filtered games
    filteredGames.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.className = "game-card";
        gameCard.innerHTML = `
            <a href="${game.link}" target="_blank">
                <img src="${game.image}" alt="${game.name}">
                <h3>${game.name}</h3>
            </a>
        `;
        if (game.category === "tiktok") {
            tiktokFilters.appendChild(gameCard);
        } else {
            topRated.appendChild(gameCard);
        }
    });
}

// Initial display of games
displayGames();
