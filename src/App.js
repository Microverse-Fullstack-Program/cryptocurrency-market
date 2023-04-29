import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'reactstrap';
import 'remixicon/fonts/remixicon.css';
import NavBar from './components/Navbar';
import Home from './components/Cryptolist';
import CoinsDetail from './components/CoinsDetail';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="coinDetail/:id" element={<CoinsDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
