import {render} from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs';


import {homePage} from '../src/views/home.js'
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout as apiLogout} from './api/data.js';
import { catalogPage } from './views/catalog.js';
import { detailsPage } from './views/details.js';
import { createPage } from './views/create.js';
import { editPage } from './views/edit.js';
import { deleteMeme } from './api/data.js';
import { profilePage } from './views/profile.js';



const main=document.querySelector('main');
setUserNav();


//Routes and views
page('/',decorateContext,homePage);
page('/login',decorateContext,loginPage);
page('/register',decorateContext,registerPage);
page('/catalog',decorateContext,catalogPage);
page('/details/:id',decorateContext,detailsPage);
page('/create',decorateContext,createPage);
page('/edit/:id',decorateContext,editPage);
page('/profile',decorateContext,profilePage);

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
    const email=sessionStorage.getItem('email')
    if (email != null) {
        document.querySelector('div.profile >span').textContent=`Welcome, ${email}`
        document.querySelector('.user').style.display='';
        document.querySelector('.guest').style.display='none';
    }else {
        document.querySelector('.user').style.display='none';
        document.querySelector('.guest').style.display='';
    }
}

async function logout(){
    await apiLogout();
    setUserNav();
    page.redirect('/')
}
