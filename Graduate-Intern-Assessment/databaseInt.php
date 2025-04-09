
$username = ”username”;
$password = “password”;
$localhost = “localhost”;
$database = “database”;

$conn = new mysqli($localhost, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT name FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
   echo  “<table >”;
    while ($row = $result -> fetch_assoc() ) {
    echo  “<tr><td>”.$row[name].”</td></tr>”;
    }
  echo ”</table>”;
} else {
    echo "0 results";
}

$conn->close();

