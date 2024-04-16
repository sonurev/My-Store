import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { Wishlist } from './pages/Wishlist';
import { Bag } from './pages/Bag'; // Updated import statement

import './App.css';
import { Address } from './pages/Address';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/address" element={<Address/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
