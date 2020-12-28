import React from 'react';
import './App.scss';
import { 
  BrowserRouter, 
  Route, 
  Switch 
} from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
