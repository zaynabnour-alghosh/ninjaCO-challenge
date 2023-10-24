import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

import Game from './Pages/Game';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
