
async function getUser(){
    let response = await fetch ("https://jsonplaceholder.typicode.com/users") ;
    let  data  = await response.json();
  console.log(data);
  }
  
  getUsers ( ) ;
  
  