import React, { Component } from 'react';
import './product.css';

class Product extends Component {
    render() {
        return (
            <ul className="row">
                {this.props.products.map(product => {
                    return (
                        <li className="list-item col-md-3 " key={product._id}>
                            <div>
                                <a href={'#' + product._id}>
                                    <img src={product.image} className="img" alt={product.title} />
                                </a>
                                <p>
                                    {product.title}
                                </p>
                            </div>
                            <div>
                                <p>{product.price}</p>
                                <button>Add to cart</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}



export default Product;