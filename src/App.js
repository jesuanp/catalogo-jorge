import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/navBar/NavBar';
import Projects from './components/projects/Projects';

function App() {
  return (
    <>
      <NavBar />

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/projects' element={<Projects />} />

      </Routes>
    </>
  );
}

export default App;
