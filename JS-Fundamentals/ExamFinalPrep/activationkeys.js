function activationKeys(input){
    let activationKey = input.shift();
 
    let command = input.shift();
 
    while(command !== 'Generate'){
        let curCommand = command.split('>>>');
 
        switch(curCommand[0]){
            case 'Contains':
                containsCase(curCommand, activationKey);
                break;
            case 'Flip':
                activationKey = flipCase(curCommand, activationKey);
                break;
            case 'Slice':
                activationKey = sliceCase(curCommand, activationKey);
                break;
        }
 
        command = input.shift(); 
    }
 
    console.log(`Your activation key is: ${activationKey}`);
 
    function containsCase(command, string){
        let firstArgument = command[1];
 
        if(string.includes(firstArgument)){
            console.log(`${string} contains ${firstArgument}`);
            return;
        }
 
        console.log('Substring not found!')
    }
 
    function flipCase(command, string){
        let flipCommand = command[1];
        let startIndex = Number(command[2]);
        let endIndex = Number(command[3]);
        let oldSubstring = string.substring(startIndex, endIndex);
 
 
        switch(flipCommand){
            case 'Upper' :
                let newUpperSubstring = oldSubstring.toUpperCase();
                string = string.replace(oldSubstring, newUpperSubstring);
                break;
            case 'Lower':
                let nweLowerSubstring = oldSubstring.toLowerCase();
                string = string.replace(oldSubstring, nweLowerSubstring);
                break;
        }
 
        console.log(string);
        return string;
    }
 
    function sliceCase(command, string){
        let startIndex = Number(command[1]);
        let endIndex = Number(command[2]);
 
        let substringToDelite = string.substring(startIndex, endIndex);
        string = string.replace(substringToDelite, "");
        console.log(string);
        return string;
    }
}