import { addLike, deleteMovie } from "../requests.js";
import { editMovieView } from "./editMovie.js";

export async function selectedMovieView(e){
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
    editMovieSectionElement.classList.add('hidden');
    loginSectionElement.classList.add('hidden');
    registerSectionElement.classList.add('hidden');

    let id = e.currentTarget.id;    
    
    let url = 'http://localhost:3030/data/movies/'+id;

    let response = await fetch(url);
    let result = await response.json();   
    
    currentMovieSectionElement.innerHTML='';

    let html = `<div class="container">
    <div class="row bg-light text-dark">
        <h1>Movie title: ${result.title}</h1>

        <div class="col-md-8">
            <img class="img-thumbnail" src="${result.img}"
                 alt="Movie">
        </div>
        <div class="col-md-4 text-center">
            <h3 class="my-3 ">Movie Description</h3>
            <p>${result.description}</p>
            <a class="btn btn-danger" href="#">Delete</a>
            <a class="btn btn-warning" href="#">Edit</a>
            <a class="btn btn-primary" href="#">Like</a>
            <span class="enrolled-span hidden"></span>
        </div>
    </div>
</div>`;
    currentMovieSectionElement.innerHTML+=html;
    let deleteButton = document.querySelector('#movie-example a.btn.btn-danger');
    let editButton = document.querySelector('#movie-example a.btn.btn-warning');
    let likeButton = document.querySelector('#movie-example a.btn.btn-primary');

    deleteButton.dataset.id = id;
    editButton.dataset.id = id;
    likeButton.dataset.id = id;

    let spanElement = document.querySelector('#movie-example span');
    let likeButtonElement = document.querySelector('#movie-example .btn.btn-primary');

    let likesUrl = `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`
    let likesResponce = await fetch(likesUrl);
    let likesResult = await likesResponce.json();
        

    spanElement.textContent = `Likes: ${likesResult}`;
    likeButtonElement.classList.add('hidden');

    if(result._ownerId !== localStorage.userId){
        deleteButton.classList.add('hidden');
        editButton.classList.add('hidden');
        likeButton.classList.remove('hidden');        
    } else {
        likeButton.classList.add('hidden');
        spanElement.classList.remove('hidden');
    }
    
    if(localStorage.userId === undefined){
        likeButton.classList.add('hidden');        
        spanElement.classList.remove('hidden');
    }
    deleteButton.addEventListener('click',deleteMovie);
    editButton.addEventListener('click', editMovieView);
    likeButton.addEventListener('click',addLike)
    
    currentMovieSectionElement.classList.remove('hidden');

    let testUrl = `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${localStorage.userId}%22`;
    let testResponse = await fetch(testUrl);
    let testResult = await testResponse.json();
    console.log(testResult.length);

    if(testResult.length>0){        
        likeButtonElement.classList.add('hidden');
        spanElement.classList.remove('hidden');
        return;
    }
}

