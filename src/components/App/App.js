import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import ViewMovie from "../ViewMovie/ViewMovie";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page-this is the dynamic route. Id is the dynamic value */}
        <Route path="/view/:id" exact>
          <ViewMovie />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}

export default App;
