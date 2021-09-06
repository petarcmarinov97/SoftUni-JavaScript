function solve(input) {
    const endIndex = input.indexOf('Statistics');
    const rows = input.slice(0, endIndex);
    let emails = new Map();
 
    rows.forEach(el => {
        const [action, username, email] = el.split('->');
        switch (action) {
            case 'Add':
                if (!emails.has(username)) {
                    emails.set(username, { texts: [] });
                } else {
                    console.log(`${username} is already registered`);
                }
                break;
            case 'Send':
                if (!emails.has(username)) {
                    emails.set(username, { texts: [] });
                }
                emails.get(username).texts.push(email);
                break;
            case 'Delete':
                if (!emails.has(username)) {
                    console.log(`${username} not found!`);
                } else {
                    emails.delete(username);
                }
                break;
        }
    });
 
    

    console.log(`Users count: ${Array.from(emails.keys()).length}`);
    const sorted = Array.from(emails.entries())
    .sort((a, b) => b[1].texts.length - a[1].texts.length || a[0].localeCompare(b[0]));
    sorted.forEach(x => {
        console.log(x[0]);
        x[1].texts
            .map(x =>` - ${x}`)
            .forEach(text => console.log(text));
    });
  
}

solve((["Add->Mike",
"Add->George",
"Send->George->Hello World",
"Send->George->Some random test mail",
"Send->Mike->Hello, do you want to meet up tomorrow?",
"Send->George->It would be a pleasure",
"Send->Mike->Another random test mail",
"Statistics"])
)