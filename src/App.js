//import logo from './logo.svg';
import './App.css';
import { useNavigate } from "react-router-dom";
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Register from './Register';
//import SubCard from './SubCard';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    
      <BrowserRouter>
       
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Register" element={<Register />} />
             {/*<Route path="/subCard/:id" element={<SubCard />} />*/}
            {/*<Route path="/AddYourBlogg" element={} />*/}
            </Routes>
        
      </BrowserRouter>
   
  )
}

export default App;
