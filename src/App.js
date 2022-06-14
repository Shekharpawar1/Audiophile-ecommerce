import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

import Homepage from './components/Homepage';
import Headphone from './components/Headphone';
import Speaker from './components/Speaker';
import Earphone from './components/Earphone';
import PageNotFound from './components/PageNotFound';
import Cart from './components/Cart';

function App() {
  return (
    
    <div className="App">
      <Router>
      <NavBar/>
       <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/headphone' element={<Headphone/>}/>
            <Route path='/speakers' element={<Speaker/>}/>
            <Route path='/earphones' element={<Earphone/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path='/*' element={<PageNotFound/>}/>
       </Routes>
      </Router>

      
    </div>
  );
}

export default App;
