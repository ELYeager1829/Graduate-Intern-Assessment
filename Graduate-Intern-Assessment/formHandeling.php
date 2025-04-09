if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name =  $_POST [ “name”] ;
  $email = $_POST [ “email”] ;
    
    echo  "Hello” . $name . “, your email is ” . $email ;
}
