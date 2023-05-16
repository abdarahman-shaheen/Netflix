import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './component/Home';
import { Routes, Route } from 'react-router-dom';
import FavMovies from './component/FavMovies';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/fav' element={<FavMovies/>}/>
        </Routes>

    </div>
  );
}

export default App;
