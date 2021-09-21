//Routing

import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import  {logout as apiLogout} from'./api/data.js';
import { getUserData } from './utility.js'
import { listingsPage } from './views/allListings.js';
import { loginPage,registerPage } from './views/auth.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { profilePage } from './views/profile.js';

const main=document.getElementById('site-content');
//Logout действие
document.getElementById('logoutBtn').addEventListener('click',logout);

setUserNav();

page('/',decorateContext,homePage);
page('/login',decorateContext,loginPage)
page('/register',decorateContext,registerPage);
page('/all-listings',decorateContext,listingsPage);
page('/details/:id',decorateContext,detailsPage);
page('/create',decorateContext,createPage);
page('/edit/:id',decorateContext,editPage);
page('/my-listings',decorateContext,profilePage);

page.start();

function decorateContext(ctx,next){
    ctx.render=(content)=>render(content,main);
    ctx.setUserNav=setUserNav;
    ctx.user=getUserData();

    next();
}

function setUserNav(){
    const user=getUserData();
    if(user){
        document.getElementById('profile').style.display='block';
        document.getElementById('guest').style.display='none';
        //Слагаме id на a параграфа за да го селектираме и да има welcome Peter след логин
        document.getElementById('user-greeting').textContent=`Welcome ${user.username}`
    }else{
        document.getElementById('profile').style.display='none';
        document.getElementById('guest').style.display='block';
    }
}

function logout(){
    apiLogout();
    setUserNav();
    page.redirect('/')
}