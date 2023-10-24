import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Game from './Pages/Game';

function App() {
  return (
    <BrowserRouter>
      <Routes>      
        <Route path='/' element={<Game />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
