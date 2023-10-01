import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import ViewMovie from '../ViewMovie/ViewMovie';

function App() {
  return (
    <div className="App">
      <Router>        
        <Route path="/" exact>
        <h1>The Movies Saga!</h1>
          <MovieList />
        </Route>
        
        {/* Details page-this is the dynamic route. Id is the dynamic value */}
        <Route path="/view/:id" exact>
        <ViewMovie/>
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
