import '../src/styles/global.css';
import Home from './pages/Home';
import Result from './pages/Result';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import ListMoviesProvider from './context/ListMoviesProvider';

function App( ) {

  
  return (
    <Router>
      <ListMoviesProvider value={{movies: []}}>
        <Switch>
          <Route path="/result" component={Result} />
          <Route path="/" component={Home} />
        </Switch>
      </ListMoviesProvider>     
    </Router>

  );
}

export default App;
