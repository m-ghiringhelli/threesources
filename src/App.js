import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Main from './views/Main/Main';
import Presidents from './views/Presidents/Presidents';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/presidents'>
            <Presidents />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
