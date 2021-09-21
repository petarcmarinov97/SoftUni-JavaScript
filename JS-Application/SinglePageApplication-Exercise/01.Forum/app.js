async function solve(){
    let homeButtonElement = document.querySelector('a');    
    let postButtonElement = document.querySelector('button.public');
    let cancelButtonElement = document.querySelector('button.cancel');
    
    let topicNameElement = document.getElementById('topicName');
    let usernameElement = document.getElementById('username');
    let postTextElement = document.getElementById('postText');

    let topicTitleElement = document.querySelector('div.topic-title');

    let postpageElement = document.getElementById('postpage');

    postButtonElement.addEventListener('click',createPost);
    cancelButtonElement.addEventListener('click',clearInputs);
    homeButtonElement.addEventListener('click', reloadPage);
    
    getHomePosts();
    
    function reloadPage(){
        window.location.reload();
    }

    function clearInputs(){
        topicNameElement.value = '';
        usernameElement.value= '';
        postTextElement.value= '';
    }
    

    async function getHomePosts(){
        let url = 'http://localhost:3030/jsonstore/collections/myboard/posts';
        await fetch(url).then(body=>body.json()).then(posts=>{
            topicTitleElement.innerHTML = '';
            for (const post in posts) {
                let id = post;
                let topicName = posts[post].topicName;
                let username = posts[post].username;
                let postTime = posts[post].postTime;

                let topicContainerDiv = document.createElement('div');
                topicContainerDiv.className = 'topic-container';
                topicContainerDiv.dataset.id = id;

                let topicNameWrapperDiv = document.createElement('div');
                topicNameWrapperDiv.className = 'topic-name-wrapper';

                let topicNameDiv = document.createElement('div');
                topicNameDiv.className = 'topic-name';

                let nameAnchor = document.createElement('a');
                nameAnchor.href = '#';
                nameAnchor.className = 'normal';
                nameAnchor.addEventListener('click', generatePostPage);

                let h2Title = document.createElement('h2');
                h2Title.textContent = topicName;
                nameAnchor.appendChild(h2Title);

                let columnsDiv= document.createElement('div');
                columnsDiv.className = 'columns';
                let timeDateDiv = document.createElement('div');
                let timeP = document.createElement('p');
                timeP.innerHTML = `Date: <time>${postTime}</time>`

                let nickNameDiv = document.createElement('div');
                nickNameDiv.className = 'nick-name';
                let usernameP = document.createElement('p');
                usernameP.innerHTML = `Username: <span>${username}</span>`;
                nickNameDiv.appendChild(usernameP);

                timeDateDiv.appendChild(timeP);
                timeDateDiv.appendChild(nickNameDiv);

                columnsDiv.appendChild(timeDateDiv);

                topicNameDiv.appendChild(nameAnchor);
                topicNameDiv.appendChild(columnsDiv);

                topicNameWrapperDiv.appendChild(topicNameDiv);

                topicContainerDiv.appendChild(topicNameWrapperDiv);

                topicTitleElement.appendChild(topicContainerDiv);                
            }            
        });
    }

    function homeView(){
        let postpageElement = document.getElementById('postpage');
        let homepageElement = document.getElementById('homepage');

        homepageElement.style.display = 'block';
        postpageElement.style.display = 'none';
    }

    function postView(){
        let postpageElement = document.getElementById('postpage');
        let homepageElement = document.getElementById('homepage');

        homepageElement.style.display = 'none';
        postpageElement.style.display = 'block';
    }

    async function createPost(e){ 
        e.preventDefault();       
        let postUrl = 'http://localhost:3030/jsonstore/collections/myboard/posts';
        let topicName = topicNameElement.value;
        let username = usernameElement.value;
        let postText = postTextElement.value;

        if(!validate(topicName)|| !validate(username) || !validate(postText)){
            window.alert('Please fill all mandatory fields (*) !')
            return;
        }

        let currentDate = new Date();
        let cDay = currentDate.getDate();
        cDay = cDay < 10 ? '0'+cDay : cDay;
        let cMonth = currentDate.getMonth() + 1;
        cMonth = cMonth < 10 ? '0'+cMonth : cMonth;
        let cYear = currentDate.getFullYear();
        let cHours = currentDate.getHours();
        let cMinutes = currentDate.getMinutes();
        let cSeconds = currentDate.getSeconds();
        let cMiliseconds = currentDate.getMilliseconds();   
        cHours = cHours < 10 ? '0'+cHours : cHours;
        cMinutes = cMinutes < 10 ? '0'+cMinutes : cMinutes;
        cSeconds = cSeconds < 10 ? '0'+cSeconds : cSeconds;     

        let postTime = `${cYear}-${cMonth}-${cDay}T${cHours}:${cMinutes}:${cSeconds}.${cMiliseconds}Z`;

        topicNameElement.value = '';
        usernameElement.value= '';
        postTextElement.value= '';

        const post = {
            topicName,
            username,
            postText,
            postTime
        }

        const options ={
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'                
            }
        };

        let response = await fetch(postUrl, options);
        let result = await response.json();

        if(response.status !== 200){
            window.alert("Something went wrong!");
        }else{
            getHomePosts();
        }
    }

    function validate(string){        
        if(string === ''){
            return false;
        }
        return true;
    }

    async function generatePostPage(e){
        let id = e.currentTarget.parentElement.parentElement.parentElement.dataset.id;
        let currentPostUrl = `http://localhost:3030/jsonstore/collections/myboard/posts/${id}`;

        let response = await fetch(currentPostUrl);
        let result = await response.json();

        let yearMonthTime = result.postTime.split('T');
        let hourMinuteSecondsTime = yearMonthTime[1].slice(0,8);

        console.log(hourMinuteSecondsTime);

        

        let html = `<h2>${result.topicName}</h2>
        <div class="comment" id="${id}">
            <div class="header">
                <img src="./static/profile.png" alt="avatar">
                <p><span>${result.username}</span> posted on <time>${yearMonthTime[0]} ${hourMinuteSecondsTime}</time></p>
    
                <p class="post-content">${result.postText}</p>
            </div>                                   
        </div>
        <h4>Add a comment:</h4>
        <form>
            <div class="new-topic-content">                    
            <textarea id="commentText" placeholder="Remember, be nice!" cols="30" rows="5"></textarea>
            </div>
            <div class="new-topic-title">
            <label for="username" style="
            margin-left: auto;
            margin-top: 8px;
            margin-right: 5px;">Username <span class="red">*</span></label>
                <input type="text" name="username" id="commentUsername">
            </div>
            <div class="new-topic-buttons">                    
                <button class="public" id="commentsButton">Post</button>
            </div>
        </form>`;
        postpageElement.innerHTML += html;

        let commentsPostButtonElement = document.getElementById('commentsButton');
        commentsPostButtonElement.addEventListener('click', postComment);
        generateComments(id);
        
        
        postView();
    }
    async function postComment(e){
        e.preventDefault();
        let commentsUrl = 'http://localhost:3030/jsonstore/collections/myboard/comments';
        let commentDiv = document.querySelector('.comment');

        let username = document.getElementById('commentUsername').value;
        let commentText = document.getElementById('commentText').value;

        if(!validate(username)){
            window.alert('Please fill all mandatory fields (*)!')
            return;
        }

        let currentDate = new Date();
        let cDay = currentDate.getDate();
        cDay = cDay < 10 ? '0'+cDay : cDay;
        let cMonth = currentDate.getMonth() + 1;        
        let cYear = currentDate.getFullYear();
        let cHours = currentDate.getHours();
        let cMinutes = currentDate.getMinutes();
        let cSeconds = currentDate.getSeconds();
        
        cMinutes = cMinutes < 10 ? '0'+cMinutes : cMinutes;
        cSeconds = cSeconds < 10 ? '0'+cSeconds : cSeconds;
                
        let ampm = cHours>11 ? 'PM' : 'AM';
        cHours = ampm == 'PM' ? cHours-12 : cHours;
        cHours = cHours < 10 ? '0'+cHours : cHours;

        let commentTime = `${cMonth}/${cDay}/${cYear}, ${cHours}:${cMinutes}:${cSeconds} ${ampm}`;
        let postId =commentDiv.id;

        console.log(postId);

        const comment = {
            username,
            commentText,
            commentTime,
            postId
        }

        const options ={
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {
                'Content-Type': 'application/json'                
            }
        };

        let response = await fetch(commentsUrl,options).catch((err)=>{
            window.alert("Something went wrong!");
        });
        if(response.status=== 200){
            document.getElementById('commentUsername').value = '';
            document.getElementById('commentText').value='';

            let html = 
        `<div id="user-comment">
            <div class="topic-name-wrapper">
                <div class="topic-name">
                    <p><strong>${username}</strong> commented on <time>${commentTime}</time></p>
                    <div class="post-content">
                        <p>${commentText}</p>
                    </div>
                </div>
            </div>
        </div>`;

        commentDiv.innerHTML+=html;
        }
    }

    async function generateComments(id){
        let url = 'http://localhost:3030/jsonstore/collections/myboard/comments';

        let commentDiv = document.querySelector('.comment');

        let response = await fetch(url);
        let result = await response.json();

        for (const comment in result) {            

            if(result[comment].postId !== id){
                continue;
            }

            let html = 
        `<div id="user-comment">
            <div class="topic-name-wrapper">
                <div class="topic-name">
                    <p><strong>${result[comment].username}</strong> commented on <time>${result[comment].commentTime}</time></p>
                    <div class="post-content">
                        <p>${result[comment].commentText}</p>
                    </div>
                </div>
            </div>
        </div>`;

        commentDiv.innerHTML+=html;
        }
    }
}

solve();