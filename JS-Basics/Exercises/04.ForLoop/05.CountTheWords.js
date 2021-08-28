function count(arg1){
    let result=arg1.split(` `).length
    console.log(result>10 ?
        `The message is too long to be send! Has ${result} words.` :
        `The message was send successfully!`);
    }

count("This message has exactly eleven words. One more as it's allowed!")