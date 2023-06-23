import { Route, Routes } from "react-router-dom";
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


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/about-coloring-system" element={<ColorSystem/>}/>
        <Route path="/catalogs" element={<Catalogs/>}/>
        <Route path="/media/actions" element={<Actions/>}/>
        <Route path="/media/news" element={<News/>}/>
        <Route path="/media/gallery" element={<Gallery/>}/>
        <Route path="/payment-and-delivery" element={<PaymentDelivery/>}/>
        <Route path="/warranty-conditions" element={<WarrantyConditions/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </>
  );
}

export default App;
