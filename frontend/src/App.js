import React from 'react';
import data from './data';

function App() {
  return (
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
            <a href="/signin"><span className="iconify" data-icon="ic:baseline-person-outline"></span></a>
        </div>
    </header>
    <main>
        <div className="row center">
          {
            data.products.map(product => (
              <div key={product._id} className="card">
              <a href={`/product/${product._id}`}>
                  <img className="medium" src={product.image} alt={product.name}></img>
              </a>
              <div className="card-body">
                  <a href={`/product/${product._id}`}><h2>{product.name}</h2></a>
                  <div className="rating">
                    <span className="iconify star" data-icon="ic:baseline-star"></span>
                    <span className="iconify star" data-icon="ic:baseline-star"></span>
                    <span className="iconify star" data-icon="ic:baseline-star"></span>
                    <span className="iconify star" data-icon="ic:baseline-star"></span>
                    <span className="iconify star" data-icon="ic:baseline-star"></span>
                  </div>
                  <div className="price">
                    ${product.price}
                  </div>
              </div>
          </div>
            ))
          }

        </div>
    </main>
    <footer className="row center">All rights reserved</footer>
  </div> 
  );
}

export default App;
