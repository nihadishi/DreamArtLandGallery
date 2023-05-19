import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Products from './components/pages/Products';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Navbar from './components/static/Navbar';
import Login from './components/pages/LoginandSignup/Login';
import Favoriutes from './components/pages/Favoriutes';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/favourites' element={<Favoriutes/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  );
}

export default App;
