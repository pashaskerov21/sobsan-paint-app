
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Compare from "./pages/Compare";
import Wishlist from "./pages/Wishlist";
import Basket from "./pages/Basket";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import ColorSystem from "./pages/ColorSystem";
import Catalogs from "./pages/Catalogs";
import Actions from "./pages/Actions";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import WarrantyConditions from "./pages/WarrantyConditions";
import Contact from "./pages/Contact";
import PaymentDelivery from "./pages/PaymentDelivery";
import NoPage from "./pages/NoPage";
import MastersUnion from "./pages/MastersUnion";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Products from "./pages/Products";
import Toolbar from "./components/toolbar/Toolbar";
import ProductDetail from "./pages/ProductDetail";
import SearchPage from "./pages/SearchPage";
import ForgetPassword from "./pages/ForgetPassword";
import UserProfile from "./pages/UserProfile";
import Order from "./pages/Order";


function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }


  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <>
      <div className={theme === 'dark' ? 'app dark' : 'app'}>
        <Toolbar/>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <ToastContainer theme="colored" position="bottom-right" autoClose={3000} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:categoryName" element={<Products />} />
            <Route path="/:categoryName/:subcategoryName" element={<Products />} />
            <Route path="/:categoryName/:subcategoryName/:altcategoryName" element={<Products />} />
            <Route path="/product/:productPath" element={<ProductDetail/>}/>
            <Route path="/compare" element={<Compare />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/basket/order" element={<Order/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget-password" element={<ForgetPassword/>}/>
            <Route path="/profile/*" element={<UserProfile/>}/>
            <Route path="/about-us" element={<About />} />
            <Route path="/about-coloring-system" element={<ColorSystem />} />
            <Route path="/catalogs" element={<Catalogs />} />
            <Route path="/media/actions" element={<Actions />} />
            <Route path="/media/news" element={<News />} />
            <Route path="/media/gallery" element={<Gallery />} />
            <Route path="/payment-and-delivery" element={<PaymentDelivery />} />
            <Route path="/warranty-conditions" element={<WarrantyConditions />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/masters-union" element={<MastersUnion />} />
            <Route path="/search" element={<SearchPage/>}/>
            <Route path="/404" element={<NoPage/>}/>
            <Route path="*" element={<Navigate to='/404' />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
