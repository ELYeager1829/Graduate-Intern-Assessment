const express = require('express');
const app = express();

 app.get(“/”,(req , res) => {
 res.send(‘Welcome to my API!’);
});

app.get(“/users”,(req , res) => {
 res.json([
         {‘name: ”Bob”’,age : 89},
         {{‘name: ”Khloe”’,age : 37},
}
]);
});
 

app.listen(3000, () => {
  console.log('Server is running');
});
