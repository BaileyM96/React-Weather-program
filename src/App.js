import 'semantic-ui-css/semantic.min.css';
import './App.css';
import HomePage from './Pages/Homepage';
import MyCities from './Pages/MyCities';
import { GlobalStyle } from './Components/Styled/Global.Style';



import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalStyle />
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
