import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Rewards from './components/rewards';
import Shop from './components/shop';
import Footer from './components/footer';
import Cart from './components/cart';
import React, { useState, createContext } from "react";
import { Provider } from "react-redux";
import store from './redux/store';

export const NameContext = createContext();
export const LogInContext = createContext();

function App() {

  // Establishing global state in this parent file to make reference to user's first nane in header
  const [fName, setFName] = useState("");

  //To set whether the login is a success or not
  const [loggedIn, setLoggedIn] = useState("not logged in");

  return (
    <div className="App">
      {/*Ensuring we can retrieve the store for redux, the name and login status in all pages*/}
      <Provider store={store}>
        <NameContext.Provider value={[fName, setFName]}>
          <LogInContext.Provider value={[loggedIn, setLoggedIn]}>
            <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/rewards" element={<Rewards />} />
              <Route exact path="/shop" element={<Shop />} />
              <Route exact path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
          </LogInContext.Provider>
        </NameContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
