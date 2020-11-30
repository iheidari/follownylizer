import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";
import Home from "./components/Home";
import Login from "./components/Login";

// https://follownylizer.herokuapp.com/auth?code=AQA97VAdBkvMxR4aTp7_8KNb1wndEn7op1Osyv7rh48HIG7AYGtWXJFg9E6Xw2F-FsVWki0gSI6fkAA9ENNzHlOQAkFIGd3qSM9kmpl283RQdEWu4SlXEYXK7qfbP20vITRH_qNYsNsMSlszhWhyCgssWsDrPhAgAIUj2oq7hrwBzIrzQSeO56g4lSaSi_yctpwYJbWOqTk5yL6SJ9YXwKVAXyfjtXbo6fuVuZlpPcqQxQ#_

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
