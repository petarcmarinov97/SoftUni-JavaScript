function oldbooks(input){
    let favBook=input[0];
    let index=1;
    let books=false;
    
    let nextbook=input[index];
    
    while(nextbook!== "No More Books"){
      if(nextbook===favBook){
        books=true;
        break;}
      index++;
      nextbook=input[index];}
    if(books===false){
      console.log("The book you search is not here!");
      console.log(`You checked ${index - 1} books.`);
    }else {
      console.log(`You checked ${index - 1} books and found it.`);
    }
  }