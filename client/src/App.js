import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {




  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/testing" element={<h1>Test Route</h1>}/>
          <Route path="/" element={  <h1>Page Count</h1>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
