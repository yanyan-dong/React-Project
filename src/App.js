import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  // // JavaScript can be written inside the function before returning the JSX
  // const title = 'Welcome to my blog'; 
  // const likes = 50; // JSX can output numbers, strings and arrays to strings, but not ojects and booleans
  // const link = "http://www.google.com"

  // JSX templates: can out put dynamic values and variables
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*" component={ NotFound }/>
          </Switch>

          {/* <h1>{ title }</h1>
          <p>Liked { likes } times</p>

          can write dynamic values directly in the curly braces, and output those as strings
          <p>{ 10 }</p>
          <p>{ "Hello, world" }</p>
          <p>{ [1,2,3,4,5] }</p>
          <p>{ Math.random() * 10 }</p>

          <a href={ link }>Google Site</a> */}
      </div>
      </div>
    </Router>
  );
}

export default App;
