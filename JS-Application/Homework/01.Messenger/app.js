const url = 'http://localhost:3030/jsonstore/messenger';
const messages = document.getElementById('messages');
const submitBtn = document.getElementById('submit');
const refreshBtn = document.getElementById('refresh');
function attachEvents() {
    submitBtn.addEventListener('click', postMessage);
    refreshBtn.addEventListener('click', representAllMessages);
}

attachEvents();

async function postMessage() {
    try{ 
        let author = document.getElementById('author');
        let content = document.getElementById('content');
         let finalMessage = {
            author: author.value,
            content: content.value
        };
        let res = await fetch(url, 
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'Post',
                body: JSON.stringify(finalMessage)
            });
        
        let resResult = await res.json();
        let result = `${resResult.author}: ${resResult.content}`;
        messages.value = messages.value + `\n${result}`;
        [author, content].map(x => x.value = '');
        } catch(err){
            console.error('Error');
        }
}
async function representAllMessages() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        messages.value = Object.values(data).map(({ author, content }) => `${author}: ${content}`).join('\n');
    } catch (error) {
        messages.value = 'Error';
    }
}