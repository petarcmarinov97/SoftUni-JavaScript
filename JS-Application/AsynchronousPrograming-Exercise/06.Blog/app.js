const viewBtn=document.getElementById('btnViewPost');

function attachEvents() {
    //Добавяне на евентЛисънър при натискане на двата бутона Load Post и View
    document.getElementById('btnLoadPosts').addEventListener('click', getPosts);
    viewBtn.addEventListener('click',displayPost);
    viewBtn.disabled=true;
}

attachEvents();

//Заявки
//Взимане на публикациите
async function getPosts() {
    
    //Взимане чрез заявка
    const url = 'http://localhost:3030/jsonstore/blog/posts';
    const response = await fetch(url);
    const data = await response.json();

    //Изпразване на падащото меню
    const select = document.getElementById('posts');
    select.innerHTML='';

    //За всяка една публикация прави елемент, който влиза в падащото меню
    Object.values(data).map(createOption).forEach(o => select.appendChild(o));

    //Включване на бутона View
    viewBtn.disabled=false;
}

//Изобразяване на публикациите
function displayPost() {
    //Взимане на публикацията от полето и подаване към функцията getCommentsByPostId
    const postId = document.getElementById('posts').value;
    getCommentsByPostId(postId);
}


//
async function getCommentsByPostId(postId) {
    //Изпразване визуализацията на коментарите, за да има място за новите
    const commentsUl = document.getElementById('post-comments');
    commentsUl.innerHTML = '';

    //Правим две заявки като използваме Promise.All за да може да се изпълняват по едно и също време, а не едно след друго
    const postUrl = 'http://localhost:3030/jsonstore/blog/posts/' + postId;
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';
    const [postResponse, commentsResponse] = await Promise.all([
        fetch(postUrl),
        fetch(commentsUrl)
    ]);

    //Преобразяваме данните след като заявките са готови и бутаме съдържанието на заглавието и публикацията
    const postData = await postResponse.json();
    document.getElementById('post-title').textContent = postData.title;
    document.getElementById('post-body').textContent = postData.body;

    //Обхождаме всичките коментари и ги бутаме отдолу във списъка
    const commentsData = await commentsResponse.json();
    const comments = Object.values(commentsData).filter(c => c.postId == postId);


    comments.map(createComment).forEach(c => commentsUl.appendChild(c));
}

//Създаване на елемент ли-Коментар
function createComment(comment) {
    const result = document.createElement('li');
    result.textContent = comment.text;
    result.id = comment.id;

    return result;
}
//Създаване на елемент опшън
function createOption(post) {
    const result = document.createElement('option');
    result.textContent = post.title;
    result.value = post.id;

    return result;
}