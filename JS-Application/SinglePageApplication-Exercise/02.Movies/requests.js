import { userHomeView } from "./pages/home.js";
import { selectedMovieView } from "./pages/selectedMovie.js";

export async function getAllMovies(){
    let url = 'http://localhost:3030/data/movies';

    let response = await fetch(url);
    let result = await response.json();    

    document.querySelector('div.card-deck.d-flex.justify-content-center').innerHTML = '';

    for (const movie in result) {
        let html = `<div class="card mb-4">
        <img class="card-img-top"
             src="${result[movie].img}"
             alt="Card image cap" width="400">
        <div class="card-body">
            <h4 class="card-title">${result[movie].title}</h4>
        </div>
        <div class="card-footer">
            <a href="#/details/CUtL9j4qI0XVhn9kTUsx">
                <button type="button" class="btn btn-info" id="${result[movie]._id}">Details</button>
            </a>
        </div>
    </div>`;

    document.querySelector('div.card-deck.d-flex.justify-content-center').innerHTML += html;
    }
    
    let detailsButtons = document.querySelectorAll('.btn.btn-info');
    detailsButtons.forEach(b=>b.addEventListener('click', selectedMovieView));
    }
export async function logInUser(e){
    e.preventDefault();        
    let loginUrl = 'http://localhost:3030/users/login';

    let email = document.getElementById('login-email').value;        
    let password = document.getElementById('login-password').value;
    
    const loginUser = {
        email,
        password,
    }

    const options ={
        method: 'POST',
        body: JSON.stringify(loginUser),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    let loginResponse = await fetch(loginUrl,options);
    let loginResult = await loginResponse.json();
    
    if(loginResponse.status === 200){
        localStorage.setItem('token',loginResult.accessToken);
        localStorage.setItem('userId',loginResult._id);
        localStorage.setItem('userEmail',loginResult.email);
        
        userHomeView();
                
        document.getElementById('welcome-text').textContent = 'Welcome, '+email;
    } else {
        window.alert('Invalid username or password!');
    }        
}
export async function registerUser(e){
    e.preventDefault();        
    let registerUrl = 'http://localhost:3030/users/register';

    let email = document.getElementById('register-email').value;        
    let password = document.getElementById('register-password').value;  
    let confirmPassword = document.getElementById('register-password-repeat').value;

    if(email == ''){
        window.alert("Please fill in email!");
        return;
    }

    if(password.length < 6){
        window.alert("Password is too short!");
        return;
    }

    if(password !== confirmPassword){
        window.alert("Passwords do not match!");
        return;
    }

    const registerUser = {
        email,
        password,
    }

    const options ={
        method: 'POST',
        body: JSON.stringify(registerUser),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    let registerResponse = await fetch(registerUrl,options);
    let registerResult = await registerResponse.json();
    

    if(registerResponse.status === 200){
        localStorage.setItem('token',registerResult.accessToken);
        localStorage.setItem('userId',registerResult._id);
        localStorage.setItem('userEmail',registerResult.email);
        
        userHomeView();
                
        document.getElementById('welcome-text').textContent = 'Welcome, '+email;
    } else {
        window.alert('Username already exists!');
    }        
}

export async function addMovie(e){
    let url = 'http://localhost:3030/data/movies';
    e.preventDefault();
    let title = document.querySelector('#add-movie input[name="title"]').value;
    let description = document.querySelector('#add-movie textarea').value;
    let imgUrl = document.querySelector('#add-movie input[name="imageUrl"]').value;
    console.log(imgUrl);

    if(title==''||description==''||imgUrl==''){
        window.alert("Please fill all the spaces!");
        return;
    }

    const movie = {
        title,
        description,
        img: imgUrl,
        ownerId: localStorage.userId,
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.token,           
        }
    }

    let addMovieResponse = await fetch(url,options);
    let addMovieResult = await addMovieResponse.json();

    if(addMovieResponse.status === 200){        
        await getAllMovies();
        userHomeView();
    }
} 
export async function deleteMovie(e){
    let id = e.currentTarget.dataset.id;
    
    let url = `http://localhost:3030/data/movies/${id}`;

    const options = {
        method: 'DELETE',        
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.token,           
        }
    }

    let deleteMovieResponse = await fetch(url,options);

    if(deleteMovieResponse.status ===200){
        await getAllMovies();
        userHomeView();
    }
}

export async function updateMovie(e){
    e.preventDefault();
    let id = e.currentTarget.dataset.id;
    
    let url = `http://localhost:3030/data/movies/${id}`;

    let title = document.querySelector('#edit-movie input[name="title"]').value;
    let description = document.querySelector('#edit-movie textarea').value;
    let imgUrl = document.querySelector('#edit-movie input[name="imageUrl"]').value;
    
    if(title==''||description==''||imgUrl==''){
        window.alert("Please fill all the spaces!");
        return;
    }

    const movie = {
        title,
        description,
        imgUrl,
        ownerId: localStorage.userId,
    }

    const options = {
        method: 'PUT',  
        body: JSON.stringify(movie),      
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.token,           
        }
    }

    let updateMovieResponse = await fetch(url,options);

    if(updateMovieResponse.status ===200){
        await getAllMovies();
        userHomeView();
    }
}

export async function addLike(e){
    e.preventDefault();

    let movieId = e.currentTarget.dataset.id;
    

    let likeUrl = 'http://localhost:3030/data/likes';

    const like = {
        movieId                        
    }
    
    const options = {
        method: 'POST',  
        body: JSON.stringify(like),      
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.token,           
        }
    }

    let addLikeResponce = await fetch(likeUrl,options);
    let addLikeResult = await addLikeResponce.json();

    if(addLikeResponce.status===200){
        let spanElement = document.querySelector('#movie-example span');
        let likeButtonElement = document.querySelector('#movie-example .btn.btn-primary');

        let likesUrl = `http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`
        let likesResponce = await fetch(likesUrl);
        let likesResult = await likesResponce.json();
        

        spanElement.textContent = `Likes: ${likesResult}`;
        likeButtonElement.classList.add('hidden');
        spanElement.classList.remove('hidden');
    }
}

export async function getMovie(id){
    return await fetch('http://localhost:3030/data/movies/'+id);
}


