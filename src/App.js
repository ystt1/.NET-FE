
import './App.css';
import { Navbar } from './Component/Navbar/Navbar';
import {
  BrowserRouter as Router,

  Route,
  Routes,

} from "react-router-dom";
import {ShopCategory} from './Pages/ShopCategory'
import {Shop} from './Pages/Shop'
import {Cart} from './Pages/Cart'
import {LoginSignUp} from './Pages/LoginSignUp'
import {Product} from './Pages/Product'

function App() {
  return (
    <div >
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/local' element={<ShopCategory category="local"/>} />
          <Route path='/travel' element={<ShopCategory category="travel"/>} />
          <Route path='/special' element={<ShopCategory category="special"/>} />
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<LoginSignUp/>}>
        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
