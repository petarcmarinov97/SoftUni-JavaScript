export function guestHomeView(){
    let homePageSectionElement = document.getElementById('home-page');
    let addMovieButtonElement = document.getElementById('add-movie-button');
    let movieSectionElement = document.getElementById('movie');
    let addMovieSectionElement = document.getElementById('add-movie');
    let currentMovieSectionElement = document.getElementById('movie-example');
    let editMovieSectionElement = document.getElementById('edit-movie');
    let loginSectionElement = document.getElementById('form-login');
    let registerSectionElement = document.getElementById('form-sign-up');
    let [welcomeTextElement,logoutButtonElement,loginButtonElement,registerButtonElement] = document.querySelectorAll('.nav-item .nav-link');

    loginButtonElement.classList.remove('hidden');
    registerButtonElement.classList.remove('hidden');
    logoutButtonElement.classList.add('hidden');
    welcomeTextElement.classList.add('hidden');
    homePageSectionElement.classList.remove('hidden');
    addMovieButtonElement.classList.add('hidden');
    movieSectionElement.classList.remove('hidden');
    addMovieSectionElement.classList.add('hidden');
    currentMovieSectionElement.classList.add('hidden');
    editMovieSectionElement.classList.add('hidden');
    loginSectionElement.classList.add('hidden');
    registerSectionElement.classList.add('hidden');
    
}

export function userHomeView(){
    let homePageSectionElement = document.getElementById('home-page');
    let addMovieButtonElement = document.getElementById('add-movie-button');
    let movieSectionElement = document.getElementById('movie');
    let addMovieSectionElement = document.getElementById('add-movie');
    let currentMovieSectionElement = document.getElementById('movie-example');
    let editMovieSectionElement = document.getElementById('edit-movie');
    let loginSectionElement = document.getElementById('form-login');
    let registerSectionElement = document.getElementById('form-sign-up');
    
    let [welcomeTextElement,logoutButtonElement,loginButtonElement,registerButtonElement] = document.querySelectorAll('.nav-item .nav-link');
    

    homePageSectionElement.classList.remove('hidden');
    addMovieButtonElement.classList.remove('hidden');
    movieSectionElement.classList.remove('hidden');
    addMovieSectionElement.classList.add('hidden');
    currentMovieSectionElement.classList.add('hidden');
    editMovieSectionElement.classList.add('hidden');
    loginSectionElement.classList.add('hidden');
    registerSectionElement.classList.add('hidden');
    loginButtonElement.classList.add('hidden');
    registerButtonElement.classList.add('hidden');
    logoutButtonElement.classList.remove('hidden');
    welcomeTextElement.classList.remove('hidden');
    
}

