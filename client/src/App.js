import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Map from './pages/Map'




//URLS
//for development
//export const CLIENT_URL = 'http://localhost:3000/'
//for deployment
export const CLIENT_URL = 'https://spoterrazi.herokuapp.com/'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route
            exact path="/"
            element={<Home />}
          />

          <Route
            exact path='/map'
            element={<Map />}
          />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
