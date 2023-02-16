import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/navBar/NavBar';
import Projects from './components/projects/Projects';
import Project from './components/project/Project';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <NavBar />

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/projects' element={<Projects />} />

        <Route path='/Project' element={<Project />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
