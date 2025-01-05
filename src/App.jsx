import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import { BrowserRouter, Route, Routes } from 'react-router';
import Dashboard from './pages/dashboard';


function App() {
  return (
    <div className="App">
<Routes>
<Route index element={<Login/>}/>
<Route path='/dashboard' element={<Dashboard/>}/>

</Routes>
    </div>
  );
}

export default App;
