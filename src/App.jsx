import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import Products from './pages/products';
import ProductsDetails from './pages/productdetails';


function App() {
  return (
    <div className="App">
<Routes>
<Route index element={<Login/>}/>
<Route path='/products' element={<Products/>}/>
<Route path='/productdetails/:id' element={<ProductsDetails/>}/>
<Route path='*' element={<Navigate to={"/not-found"} />} />

</Routes>
    </div>
  );
}

export default App;
