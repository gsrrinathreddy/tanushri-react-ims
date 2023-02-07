import logo from "./logo.svg";
import "./App.css";
import IMSnavbar from "./components/IMSnavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Cake from "./pages/Cake";
import Flowers from "./pages/Flowers";
import Gifts from "./pages/Gifts";
import Plants from "./pages/Plants";
import Icecream from "./pages/Icecream";
import Notfound from "./pages/Notfound";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Delivery from "./pages/Delivery";
import Users from "./pages/User";
function App() {
  let a = ["Cake", "Icecream", "Flowers", "Gifts", "User"];
  let b = [
    "Signin",
    "My Queens Store",
    "My Orders",
    "My Address Book",
    "My Wallet",
    "Signup",
  ];
  return (
    <div className="App">
      <BrowserRouter>
        <IMSnavbar pages={a} settings={b} />
        <Routes>
          <Route path="/" element={<Plants />} />
          <Route path="Cake" element={<Cake />} />
          <Route path="Icecream" element={<Icecream />} />
          <Route path="Flowers" element={<Flowers />} />
          <Route path="Gifts" element={<Gifts />} />

          <Route path="Cart" element={<Cart />} />
          <Route path="/*" element={<Notfound />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Signin" element={<Signin />} />
          <Route path="cart/Delivery" element={<Delivery />} />
          <Route path="User" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
