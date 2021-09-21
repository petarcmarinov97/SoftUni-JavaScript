import { getAllMovies, getMovie, updateMovie } from "../requests.js";

export async function editMovieView(e){
    let homePageSectionElement = document.getElementById('home-page');
    let addMovieButtonElement = document.getElementById('add-movie-button');
    let movieSectionElement = document.getElementById('movie');
    let addMovieSectionElement = document.getElementById('add-movie');
    let currentMovieSectionElement = document.getElementById('movie-example');
    let editMovieSectionElement = document.getElementById('edit-movie');
    let loginSectionElement = document.getElementById('form-login');
    let registerSectionElement = document.getElementById('form-sign-up');

    homePageSectionElement.classList.add('hidden');
    addMovieButtonElement.classList.add('hidden');
    movieSectionElement.classList.add('hidden');
    addMovieSectionElement.classList.add('hidden');
    currentMovieSectionElement.classList.add('hidden');
    editMovieSectionElement.classList.remove('hidden');
    loginSectionElement.classList.add('hidden');
    registerSectionElement.classList.add('hidden');

    let editSubmitButtonElement = document.querySelector('#edit-movie button');
    let movieTitleElement = document.querySelector('#edit-movie input[name="title"]');
    let movieDescriptionElement = document.querySelector('#edit-movie textarea');
    let imgUrlElement = document.querySelector('#edit-movie input[name="imageUrl"]');

    editSubmitButtonElement.dataset.id = e.currentTarget.dataset.id;
    editSubmitButtonElement.addEventListener('click',updateMovie);

    let getMovieResponse = await getMovie(e.currentTarget.dataset.id);
    let getMovieResult = await getMovieResponse.json();
    console.log(getMovieResult);

    movieTitleElement.value = getMovieResult.title;
    movieDescriptionElement.value = getMovieResult.description;
    imgUrlElement.value = getMovieResult.img;    
}

