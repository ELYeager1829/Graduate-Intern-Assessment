const fs = require (‘fs’);
const path = require(‘path’);

const filePath = path.join(__dirname, ‘input.txt’);
 const tWord = “lavender”;
let count = 0;

 
fs.readFile(filePath,’utf8’,(err,data)) => {
     if(err){
         console.error (err);
         return ;
    }

const words = data.split (/\s+/);
words.forEach(word => {
         if (word.equalsIgnoreCase( targetWord.)){
           count++;

}
});
     console.log(`The word '${targetWord}' appears ${count} times.`);
});