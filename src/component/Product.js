import React, { Component } from 'react';
import './product.css';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null
        }
    }

    openModal = (product) => {
        this.setState({
            product
        });
    };

    closeModal = () => {
        this.setState({
            product: null
        })
    }
    render() {
        const { product } = this.state;
        return (
            <div>
                <ul className="row">
                    {this.props.products.map(product => {
                        return (
                            <li className="list-item col-md-3 " key={product._id}>
                                <div>
                                    <a href={'#' + product._id}>
                                        <img src={product.image} className="img" alt={product.title} onClick={() => this.openModal(product)} />
                                    </a>
                                    <p>
                                        {product.title}
                                    </p>
                                </div>
                                <div className="cartitem">
                                    <p>Rs {product.price}</p>
                                    <button className="btn btn-warning" onClick={() => this.props.addToCart(product)}>Add to cart</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>

                {product && (

                    <Modal isOpen={true} onRequestClose={this.closeModal}>

                        <button className="close-modal" onClick={this.closeModal}>x</button>
                        <Zoom>
                            <div className="col-md-12 modal-content product-modal modal">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src={product.image} className="img" alt={product.title} />
                                    </div>
                                    <div className="col-md-6">
                                        <h4><strong> {product.title} </strong></h4>
                                        <p>
                                            {product.description}
                                        </p>
                                        <br></br>
                                        <strong>
                                            Available sizes :  {" "}
                                            {product.avaialableSizes.map((x) => (
                                                <span>
                                                    {" "}

                                                    <button className="btn btn-warning">{x}</button>
                                                </span>
                                            ))}
                                        </strong>

                                        <div className="price">
                                            <strong>Price</strong> : Rs {product.price} /-
                                        </div>

                                        <button className="col-md-5 btn btn-warning" onClick={() => { this.addToCart(product); this.closeModal(); }}>
                                            CHECKOUT
                                        </button>


                                    </div>
                                </div>

                            </div>

                        </Zoom>

                    </Modal>

                )
                }
            </div>
        )
    }
}



export default Product;