import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  // Javascript data types can be given to the return to render on the app.
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = "https://www.google.com/";
  // As an example, an object cannot be an output for the React app. 
  // const person = { name: 'Dave', age: 30 };

  return (
    <div className="App">

      <Navbar />

      <div className="content">
        {/* Called from above */}
        <h1>{title}</h1>
        {/* <p> {person} </p> */}
        <p>Liked {likes} times</p>

        {/* Can also be inserted directly */}
        <p>{10}</p>
        <p>{"Hello World"}</p>
        <p>[1,2,3,4,5]</p> 
        <p>{Math.random() * 10}</p>

        <a href={link}>Google</a>

        <Home />
      </div>
    </div>
  );
}

export default App;
