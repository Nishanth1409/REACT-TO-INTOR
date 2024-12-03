
import './App.css';
// import ClassComponent from './components/ClassComponent';
// import FunctionalComponent from './components/FunctionalComponent';

// React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// routes
import {Routes, Route} from "react-router-dom"

// Pages
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import PlayPage from './pages/PlayPage';


function App() {
  return (
    <div className="App">
      {}
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/movie/:id" element={<MoviePage/>} />
        <Route path="/plays" element={<PlayPage/>} />
      </Routes>
    </div>
  );
}

export default App;
