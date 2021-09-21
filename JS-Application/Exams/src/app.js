import {render} from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs';

import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { editCar, logout as apiLogout } from './api/data.js';
import { allListingsPage } from './views/allListings.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { profilePage } from './views/profile.js';

const main=document.querySelector('main');
setUserNav();

//Routes and views
page('/',decorateContext,homePage);
page('/login',decorateContext,loginPage);
page('/register',decorateContext,registerPage);
page('/all-listings',decorateContext,allListingsPage);
page('/create',decorateContext,createPage);
page('/details/:id',decorateContext,detailsPage);
page('/edit/:id',decorateContext,editPage);
page('/myCars',decorateContext,profilePage)



//Logout
document.getElementById('logoutBtn').addEventListener('click',logout);


//Стартиране на приложението
page.start();


//Middleware pathern
function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav=setUserNav;

    next();
}

//Функция за скриване на определени страници след login
function setUserNav() {
    const username=sessionStorage.getItem('username')
    if (username != null) {
        document.getElementById('greeting').textContent=`Welcome, ${username}`
        document.querySelector('#profile').style.display='';
        document.querySelector('#guest').style.display='none';
    }else {
        document.querySelector('#profile').style.display='none';
        document.querySelector('#guest').style.display='';
    }
}

async function logout(){
    await apiLogout();
    setUserNav();
    page.redirect('/')
}