import Home from './Home';
import Logbar from './Logbar';
import Create from './Create'
import OfferSearch from './OfferSearch';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OfferDetails from './OfferDetails';
import Register from './Register';
import Login from './Login'

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
            <Route path="/search">
              <OfferSearch/>
            </Route>
            <Route path="/offers/:id">
              <OfferDetails/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/login">
              <Login/>
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
