import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
// import Loginbutton from './components/Loginbutton';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
        <div>
            <a href="/"><span className="iconify" data-icon="ic:baseline-menu"></span></a>
        </div>
        <div>
            <a className="brand" href="/">Nature</a>
        </div>
        <div>
            <a href="/"><span className="iconify" data-icon="ic:round-search"></span></a>
            <a href="/cart"><span className="iconify" data-icon="ic:outline-shopping-bag"></span></a>
            {/* <Loginbutton></Loginbutton> */}
            <a href="/signin"><span className="iconify" data-icon="ic:baseline-person-outline"></span></a>
        </div>
    </header>
    <main>
      <Route path="/product/:id" component={ProductScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>

    </main>
    <footer className="row center">All rights reserved</footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
