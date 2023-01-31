import logo from './logo.svg';
import './App.css';
import IMSnavbar from './components/IMSnavbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cart from './pages/Cart';
import Cake from './pages/Cake';
import Flowers from './pages/Flowers';
import Gifts from './pages/Gifts';
import Plants from './pages/Plants';
import Icecream from './pages/Icecream';
function App() {
   let a= ['Cake', 'Icecream', 'Flowers','Gifts'];
   let b = ['Profile', 'Account', 'Dashboard', 'Logout'];
  return (
    <div className="App">
      <BrowserRouter>
      <IMSnavbar pages={a} settings={b}/>
      <Routes>
      <Route path="/" element={<Gifts/>}/>
       <Route path="Cake" element={<Cake/>}/>
       <Route path="Icecream" element={<Icecream/>}/>
       <Route path="Flowers" element={<Flowers/>}/>
       <Route path="Gifts" element={<Gifts/>}/>
       <Route path="Plants" element={<Plants/>}/>
       <Route path="Cart" element={<Cart/>}/>
      </Routes>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
