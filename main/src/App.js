import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Products from './components/pages/Products';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import Login from './components/pages/LoginandSignup/Login';
import Favoriutes from './components/pages/Favoriutes';
import { useState } from 'react';
import { FavContext } from './components/API/FavContext';

function App() {
  const [Fav, setFav] = useState(FavContext.length)// to nav

  return (
    <>
      <Navbar fav={Fav} />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route element={<Login />}> */}
          <Route path='/products' element={<Products />} />
          <Route path='/favourites' element={<Favoriutes />} />
        {/* </Route> */}
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />

        {/* <Route>
        <Route></Route>

        </Route> */}
      </Routes>
    </>
  );
}

export default App;
