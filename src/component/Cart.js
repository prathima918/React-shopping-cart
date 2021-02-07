import React, { Component } from 'react';
import './cart.css';
import Checkoutform from './Checkoutform';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCheckout: false
        };
    }
    render() {
        const { cartItems } = this.props;
        return (
            <div className="col-md-12">
                <div>

                    {cartItems.length === 0 ? (
                        <button className="btn btn-warning cart-header">Cart is empty</button>
                    ) :
                        (
                            <button className="btn btn-warning cart-header">Item {cartItems.length}</button>
                        )}
                </div>

                <div className="col-sm-12 p0">
                    <ul className="row p0 item-scroll">
                        {cartItems.map(item => <li className="col-md-4 cart" key={item._id}>
                            <div className="cart-items">
                                <img src={item.image} alt={item.title} />

                                <div>
                                    <h5>{item.title}</h5>
                                    <h5>Rs {item.price} X {item.count}</h5>

                                    <button className="btn btn-warning" onClick={() => this.props.removeItems(item)}>Remove</button>
                                </div>
                            </div>
                        </li>)}
                    </ul>
                </div>

                {cartItems.length !== 0 && (
                    <div>
                        <div className="row">
                            <div className="col-sm-6 total">
                                Total : {" "}
                                <h5>Rs {cartItems.reduce((a, b) => a + b.price * b.count, 0)} /-</h5>
                            </div>
                            <button className="col-sm-6 btn btn-warning" onClick={() => {
                                this.setState({ showCheckout: true });
                            }} data-toggle="modal" data-target="#exampleModalLong">Proceed</button>
                        </div>
                        { this.state.showCheckout && (
                            <div>
                                <Checkoutform createOrder={this.props.createOrder} />
                            </div>
                        )}
                    </div>
                )}


            </div>
        )

    }
}

export default Cart; 