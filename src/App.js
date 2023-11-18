import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  
  return (
    <Router>
      <div className="App">
        <Logbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/offers/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
