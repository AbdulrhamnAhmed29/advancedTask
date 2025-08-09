import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// COMPONENT 
import HeaderBtm from './component/Header/HeaderBtm/HeaderBtm';
import HeaderTOP from './component/Header/HeadTop/HeaderTOP';
import Footer from './component/Footer/Footer.jsx';
// STYLES
import './app.css';

//  PAGES 
import Home from './pages/Home/Home';
import Detailsproduct from './pages/DetailsProduct/Detailsproduct';
import Cart from './pages/Cart/Cart';
import CategoryPage from './pages/category-page/CategoryPage';
import Search from './pages/searchResult/search';
import FavoritePage from './pages/FavoritePage/Favorite';
import About from './pages/AboutUs/About';
import ContactUs from './pages/contact/Contact';
import Register from './pages/Register/Register.jsx';
import SignIn from './pages/signin/signin';

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

const hideFooter = location.pathname === '/register' || location.pathname === '/signin';

  return (
    <div>
      {/* header */}
      <header className='header'>
        <HeaderTOP />
        <HeaderBtm />
      </header>

      {/* main content */}
      <main className='pages'>
        <Routes>
          {/* home */}
          <Route path="/" element={<Home />} />

          {/* about us */}
          <Route path="/about" element={<About />} />

          {/* details product */}
          <Route path="/detailsproduct/:id" element={<Detailsproduct />} />

          {/* category */}
          <Route path="/category/:category" element={<CategoryPage />} />

          {/* cart */}
          <Route path="/cart" element={<Cart />} />

          {/* search */}
          <Route path="/search" element={<Search />} />

          {/* favorite */}
          <Route path="/favorite" element={<FavoritePage />} />

          {/* contact  */}
          <Route path="/contact" element={<ContactUs />} />

          {/* register */}
          <Route path="/register" element={<Register />} />
          {/* signin  */}
          <Route path="/signin" element={<SignIn />} />


          {/* 404 page */}
          <Route path="*" element={
            <h3 className='fs-1 text-black notfound text-center'>
              Page Not Found
            </h3>
          } />
        </Routes>
      </main>

      {/* footer */}
      {!hideFooter && (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  );
}

export default App;
