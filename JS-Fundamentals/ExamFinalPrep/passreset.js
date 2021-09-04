function passwordReset(input) {
    let password = input.shift();
    let commandLine = input.shift();
   
   
    while (commandLine !== "Done") {
      if (commandLine.includes("TakeOdd")) {
        let newPass = "";
        for (let i = 0; i < password.length; i++) {
          if (i % 2 === 1) {
            newPass += password[i];
          }
        }
        password = newPass;
        console.log(password);
   
      } else if (commandLine.includes("Substitute")) {
        let [command, substring, substitute] = commandLine.split(' ');
   
        if (password.includes(substring)) {
          while (password.includes(substring)) {
            password = password.replace(substring, substitute);
          }
   
          console.log(password);
        } else {
          console.log(`Nothing to replace!`);
        }
   
      } else if (commandLine.includes("Cut")) {
        let [command, index, length] = commandLine.split(' ');
        index = Number(index);
        length = Number(length);
        let cut = password.substr(index, length);
        password = password.replace(cut, '');
        console.log(password);
   
      }
   
   
      commandLine = input.shift();
    }
   
    console.log(`Your password is: ${password}`);
  }
  
passwordReset([`up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy`,
`TakeOdd`,
`Cut 18 2`,
`Substitute ! ***`,
`Substitute ? .!.`,
`Done`])