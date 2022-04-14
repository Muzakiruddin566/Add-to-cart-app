import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './components/Navbar';
import Products from './components/Products';
import ViewCart from './components/ViewCart';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Products />} />
          <Route path='/viewCart' element={<ViewCart />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
