// All the movies
  function addMoviesToDom(loopMovies) {
    const movieList = document.getElementById("movie-filter-list");
    movieList.innerHTML = '';

    var movieListItems  = loopMovies.map((movies) => {
        var newMovie    = document.createElement("li", "MovieName");

        var newImg      = document.createElement("img");
        newImg.src      = movies.poster;
        
        var linkMovie   = document.createElement("a");
        linkMovie.href  = "https://www.imdb.com/title/" + movies.imdbID;
        linkMovie.target = "_black";

        var newMovieTitle   = document.createElement("p");
        newMovieTitle.textContent   = movies.title

        newMovie.appendChild(linkMovie);
        newMovie.appendChild(newMovieTitle);
        linkMovie.appendChild(newImg);

        return newMovie;
    });

    movieListItems.forEach((newMovie) => {
        movieList.appendChild(newMovie);
    });
    console.log("These are all the movies")
};

// To call the function for Showing All the movies
addMoviesToDom(moviesDB.Movies);

// Activate the RadioButtons
function addEventListeners() {
    const allRadioButtons = document.getElementsByName("movie-filter");

    allRadioButtons.forEach((radioButton) => {
        radioButton.addEventListener("change", handleOnChangeEvent);
    })
};

// Filter by Movie name
function filterMovieName(wordInMovieTitle) {
    const filterTheMovieName = moviesDB.Movies
    .filter((movie) => {
        return movie.title.includes(wordInMovieTitle);
    });

    addMoviesToDom(filterTheMovieName);

    console.log("I will show the whole Array", filterTheMovieName)
}

// Filter Movies after 2014
function filterLatestMovie() {
    const filterTheLatestMovie = moviesDB.Movies
    .filter((movie) => {
        return movie.year >= 2014;
    });

    addMoviesToDom(filterTheLatestMovie);

    console.log("Here are the movies after 2014", filterTheLatestMovie);
}

// Switch event for Radio Buttons
function handleOnChangeEvent(event) {
    switch(event.target.value) {
        case "latest-movie":
            filterLatestMovie();
            console.log("These are the latest movies")
            break;
        case "avengers-movie":
            filterMovieName("Avenger");
            console.log("Here are the Avengers movies")
            break;
        case "x-men-movie":
            filterMovieName("X-Men");
            console.log("You just selected the X-men movies")
            break;
        case "princess-movie":
            filterMovieName("Princes");
            console.log("All the movies with a princess")
            break;
        case "batman-movie":
            filterMovieName("Batman");
            console.log("The Batman movies")
            break;
        default:
            console.log("No movie selected");
            break;
    }
    console.log(event.target);
}

addEventListeners();