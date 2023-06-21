import './App.css';
import Weather from './Components/Weather-Card';
import Forecasted from './Components/Weekly-forecast';
import Bonus from './Components/Bonus-Info';
import Footer from './Components/Footer';
import HomePage from './Pages/Homepage';
import MyCities from './Pages/MyCities';

// import 'semantic-ui-css/semantic.min.css';


import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route
            path='/React-Weather-program'
              element={<HomePage />}
            />
            <Route
            path='/myCities'
            element={<MyCities />}
            />
            </Routes>
          </header>
      </div>
    </Router>

  );
}

export default App;
