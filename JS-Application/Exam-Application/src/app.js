import {render} from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs';


import {logout as apiLogout} from './api/data.js'
import { createPage } from './views/create.js';
import { dashboardPage } from './views/dashboard.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { myBooksPage } from './views/mybooks.js';
import { registerPage } from './views/register.js';



const main=document.querySelector('main');
setUserNav();


//Routes and views
page('/',decorateContext,dashboardPage);
page('/dashboard',decorateContext,dashboardPage);
page('/login',decorateContext,loginPage);
page('/register',decorateContext,registerPage);
page('/create',decorateContext,createPage);
page('/details/:id',decorateContext,detailsPage);
page('/edit/:id',decorateContext,editPage);
page('/my-books',decorateContext,myBooksPage);

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
        document.querySelector('#greeting').textContent=`Welcome, ${email}`
        document.querySelector('#user').style.display='';
        document.querySelector('#guest').style.display='none';
    }else {
        document.querySelector('#user').style.display='none';
        document.querySelector('#guest').style.display='';
    }
}

async function logout(){
    await apiLogout();
    setUserNav();
    page.redirect('/')
}
