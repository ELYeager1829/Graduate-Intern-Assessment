
function FetchUser() {
    // Your code here
   const [data, setData] = useState([ ]);
  
  useEffect (() => {
  fetch (‘https://facebook.com/users’)
    .then ((response) => response.json())
    .then ((data) => setData(data));
  },[ ]);
   
    return (
      <div>
        {data.map(user) => (
             <p>{user.name}</p>
      ))}
      </div>
    );
  }  