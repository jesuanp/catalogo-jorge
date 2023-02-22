import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/navBar/NavBar';
import Projects from './components/projects/Projects';
import Project from './components/project/Project';
import Footer from './components/footer/Footer';
import Admin from './components/admin/Admin';
import Auth from './components/admin/Auth';

function App() {
  return (
    <>
      <Routes>

        <Route path='/' element={
          <>
            <NavBar />
            <Home />
            <Footer />
          </>
        } />

        <Route path='/projects' element={
          <>
            <NavBar />
            <Projects />
            <Footer />
          </>
        } />

        <Route path='/Project/:id' element={
          <>
            <NavBar />
            <Project />
            <Footer />
          </>
        } />

        <Route path='/admin' element={<Admin />} />
        <Route path='/auth' element={<Auth />} />

      </Routes>
    </>
  );
}

export default App;
