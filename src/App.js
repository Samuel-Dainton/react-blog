import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

function App() {
  // Javascript data types can be given to the return to render on the app.
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = "https://www.google.com/";
  // As an example, an object cannot be an output for the React app. 
  // const person = { name: 'Dave', age: 30 };

  return (
    <Router>
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

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
