import { addMovieView } from './pages/addMovie.js';
import { guestHomeView,userHomeView } from './pages/home.js';
import { loginView } from './pages/login.js';
import { registerView } from './pages/register.js';
import { getAllMovies, logInUser, registerUser } from './requests.js';

async function setup(){
    if(localStorage.userId !== undefined){
        document.getElementById('welcome-text').textContent = 'Welcome, '+localStorage.userEmail;
        userHomeView();
    }else{
        guestHomeView();
    }    
    await getAllMovies();
    
    //navigation buttons
    let homeButtonElement = document.querySelector('a.navbar-brand.text-light'); 
    
    let [welcomeTextElement, logoutButtonElement,loginButtonElement, registerButtonElement] = Array.from(document.querySelectorAll('.nav-item .nav-link'));
    
    homeButtonElement.addEventListener('click',function(){        
        document.location.reload();
    });
    loginButtonElement.addEventListener('click', loginView);
    registerButtonElement.addEventListener('click',registerView);    
    logoutButtonElement.addEventListener('click', function(){
        localStorage.removeItem('userId');
        localStorage.removeItem('token');
        localStorage.removeItem('userEmail');
        document.location.reload();
    })
    //buttons in views
    let loginButton = document.getElementById('login-button');
    loginButton.addEventListener('click', logInUser);
    
    let registerButton= document.getElementById('register-button');
    registerButton.addEventListener('click',registerUser);

    let addMovieButton = document.getElementById('add-movie-button');
    addMovieButton.addEventListener('click', addMovieView);
}

setup();