import { getMovieReviewData } from "./data.js";

function init () {
    const movieReviewData = getMovieReviewData();

    paintStatistics (movieReviewData);

}

function paintStatistics (movieReviewData) {
    const flatReviewData = movieReviewData.flat();

    const totalMovies = movieReviewData.length;
    const totalReviews = flatReviewData.length;
    const totalRating = flatReviewData.reduce((acc, item) => {
        return acc + item.rating;
    }, 0);

    console.log(totalRating);

    const avgRating = (totalRating / totalReviews).toFixed(2);
    console.log(avgRating);
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

init();