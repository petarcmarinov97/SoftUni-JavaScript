export function registerView(){
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
    editMovieSectionElement.classList.add('hidden');
    loginSectionElement.classList.add('hidden');
    registerSectionElement.classList.remove('hidden');
}

