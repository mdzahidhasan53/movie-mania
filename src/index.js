import { getMovieReviewData } from "./data.js";

function init () {
    const movieReviewData = getMovieReviewData();

    paintStatistics (movieReviewData);
    paintMovieData (movieReviewData);

}

function paintStatistics (movieReviewData) {
    const flatReviewData = movieReviewData.flat();

    const totalMovies = movieReviewData.length;
    const totalReviews = flatReviewData.length;
    const totalRating = flatReviewData.reduce((acc, item) => {
        return acc + item.rating;
    }, 0);
    

    const avgRating = (totalRating / totalReviews).toFixed(2);
    
    const totalMoviesEl = document.getElementById("tMovie");
    addStat (totalMoviesEl, totalMovies);

    const totalRatingEl = document.getElementById("tAvgRating");
    addStat (totalRatingEl, avgRating);

    const totalReviewEl = document.getElementById("tReview");
    addStat (totalReviewEl, totalReviews);



}

function addStat (elem, value) {
    const spanEl = document.createElement("span");
    spanEl.classList.add("text-3xl")
    spanEl.innerText = value;
    elem.appendChild(spanEl);
}


function paintMovieData (movieReviewData){

    const flatReviewData = movieReviewData.flat();
    const movieListEl = document.querySelector("#movieList ul");
    
    flatReviewData.map((movie) => {
        const liElem = document.createElement("li");
        liElem.classList.add("bg-lime-200", "p-2", "border-solid", "rounded-md", "w-1/4", "my-2");
        movieListEl.appendChild(liElem);
        const titleElem = document.createElement("p");
        titleElem.classList.add("text-2xl", "mb-2");
        titleElem.innerText = `${movie.title} - ${movie.rating}`;
        liElem.appendChild(titleElem);
        

        const contentElem = document.createElement("p");
        contentElem.classList.add("mb-2", "mx-2", "text-sm");
        contentElem.innerText = `${movie.content}`;
        liElem.appendChild(contentElem);
        
        const directElem = document.createElement("p");
        directElem.classList.add("mb-2", "mx-2", "text-md");
        directElem.innerText = `By ${movie.by} on ${new Intl. DateTimeFormat('en-BD').format (movie.on)}`;
        liElem.appendChild(directElem);



    })
    
}

init();