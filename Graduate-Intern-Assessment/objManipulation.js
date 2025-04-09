
function filterAdults(users) {
    let adults ;
  
   adults = users.filter(person => person.age > 18);
  
  return adults;
   }
  
  