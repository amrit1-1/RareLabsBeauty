import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Rewards from './components/rewards';
import Shop from './components/shop';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/rewards" element={<Rewards />} />
        <Route exact path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
