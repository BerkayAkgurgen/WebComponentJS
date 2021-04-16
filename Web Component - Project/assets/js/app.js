let movies = [{
        title: "The Man From Earth 1",
        description: `John üniversiteden ayrılıp, başka bir yere gitmeye karar vermiş, akademisyen arkadaşları da ona veda etmek için evine gelmişlerdir. Arkadaşları John'u kalması için ikna etmeye çalışırken, John büyük sırrını ortaya dökecek ve herkesi büyük bir şaşkınlığa sürükleyecekti`,
        poster: "https://unutulmazfilmler.pw/wp-content/uploads/2016/07/The-Man-from-Earth.jpg",
        isFavourite: true
    },
    {
        title: "The Man From Earth 2",
        description: `John üniversiteden ayrılıp, başka bir yere gitmeye karar vermiş, akademisyen arkadaşları da ona veda etmek için evine gelmişlerdir. Arkadaşları John'u kalması için ikna etmeye çalışırken, John büyük sırrını ortaya dökecek ve herkesi büyük bir şaşkınlığa sürükleyecekti`,
        poster: "https://unutulmazfilmler.pw/wp-content/uploads/2016/07/The-Man-from-Earth.jpg",
        isFavourite: false
    },
    {
        title: "The Man From Earth 3",
        description: `John üniversiteden ayrılıp, başka bir yere gitmeye karar vermiş, akademisyen arkadaşları da ona veda etmek için evine gelmişlerdir. Arkadaşları John'u kalması için ikna etmeye çalışırken, John büyük sırrını ortaya dökecek ve herkesi büyük bir şaşkınlığa sürükleyecekti`,
        poster: "https://unutulmazfilmler.pw/wp-content/uploads/2016/07/The-Man-from-Earth.jpg",
        isFavourite: true
    }
];

const search_text = document.querySelector(".search_text")

// prepareMovies(movies)

search_text.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        searchMovies()
    }
})

async function searchMovies() {
    let request = await fetch(`https://www.omdbapi.com/?apikey=cf280cd8&t?type=movie&r=json&s=${search_text.value.trim()}`)
    let response = await request.json()
    let movies = response.Search.map(movie => {
        return {
            title: movie.Title,
            description: `${movie.Year}/${movie.Type}`,
            imdbID: movie.imdbID,
            poster: movie.Poster === "N/A" ? "assets/img/default.png" : movie.Poster,
            isFavourite: false
        }
    })
    prepareMovies(movies)
}


function prepareMovies(movies) {
    document.querySelector("#movies").innerHTML =  ""
    movies.forEach(movie => {
        let movie_card = document.createElement("movie-card")
        document.querySelector("#movies").append(movie_card)
        movie_card.setAttribute("title", movie.title)
        movie_card.setAttribute("description", movie.description)
        movie_card.setAttribute("poster", movie.poster)
        movie_card.setAttribute("isFavourite", movie.isFavourite)
    })
}