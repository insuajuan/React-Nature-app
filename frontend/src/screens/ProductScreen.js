import React from 'react';
import data from '../data';
import Rating from '../components/Rating';
import ProductBreadcrumb from '../components/ProductBreadcrumb';

export default function ProductScreen(props) {
    const product = data.products.find((x) => x._id === props.match.params.id)
    if (!product) {
        return<div>Product Not Found</div>
    };
    return (
        <div>
            <div className="breadcrumb">
                <ProductBreadcrumb></ProductBreadcrumb>
            </div>
            <div className="row top">
                <div className="col-1">
                    <img className="large" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-1">
                    <img className="large" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <div className="row">
                            <div><h1>{product.name}</h1></div>
                        </div>
                        <div className="row">
                            <div className="price"><h2>${product.price}</h2></div>
                        </div>
                        {product.countInStock > 0 ? (<div className="row"><input defaultValue="1"></input><button >Add to Cart</button></div>) : 
                        <button className="btn-block">Out of Stock</button> 
                        }                                
                    </div>           
                </div>
                <div className="col-1">
                    <div className="card card-body">    
                        <ul>
                            <li>
                                <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                            </li>
                            <li>
                                Description: {product.description}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
