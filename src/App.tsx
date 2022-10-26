import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./componenet/Navbar";
import Products from "./componenet/Products";

import "./App.css";
import Productdetails from "./pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<Productdetails />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
