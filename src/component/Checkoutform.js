
import React, { Component } from "react";
import './form.css';
import Swing from 'react-reveal/Swing';


class Checkoutform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            address: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems
        }

        this.props.createOrder(order);

    }
    render() {
        return (
            <div className="checkout-cart">
                <Swing right casecade>
                    <div className="modal fade" id="exampleModalLong" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">PROCEED TO CHECKOUT</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">

                                    <form onSubmit={this.createOrder}>
                                        <ul className="form-elements">
                                            <li>
                                                <label>Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    required
                                                    onChange={this.handleChange} />
                                            </li>
                                            <li>
                                                <label>Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    required
                                                    onChange={this.handleChange} />
                                            </li>
                                            <li>
                                                <label>Address</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    required
                                                    onChange={this.handleChange} />
                                            </li>

                                            <li>
                                                <button className="col-md-12 btn btn-warning btm-space">Checkout</button>
                                            </li>

                                        </ul>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </Swing>



















            </div>
        )
    }
}


export default Checkoutform;