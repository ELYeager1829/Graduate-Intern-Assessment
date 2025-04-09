
function Counter() {
    // Your code here
  const [count,setCount] = useState(0);
  
  const increase = () => setCount (count + 1 );
  const decrease = () => setCount (count - 1 );
  
    return (
      <div>
        <h1>Count: {/* Display count here */}</h1>
        <button onClick = {increase} >Increase</button>
        <button onClick = {decrease} >Decrease</button>
      </div>
    );
  }  