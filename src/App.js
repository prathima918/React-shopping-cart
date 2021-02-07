import React from 'react';
import Product from './component/Product';
import data from './data.json';
import Filter from './component/Filter';
import './App.css'
import Cart from './component/Cart';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      products: data.products,
      size: "",
      sort: "",
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems")) : []

    }
  }

  createOrder = (order) => {
    alert("name")
  }
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    }));
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  removeItems = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id)
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter((x) => x._id !== product._id)));
  }

  sortProducts = (event) => {
    const sort = event.target.value;
    this.setState(() => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "Lowest"
            ? a.price > b.price ? 1 : -1 :
            sort === "Highest"
              ? a.price < b.price ? 1 : -1 :
              a._id > b._id ? 1 : -1
        ),
    })
    )
  }

  sizeProducts = (event) => {
    if (event.target.value === "") {
      this.setState({ size: event.target.value, products: data.products })
    }
    else {
      this.setState({
        size: event.target.value,
        products: data.products.filter((prod) => prod.avaialableSizes.indexOf(event.target.value) >= 0)

      })
      console.log(event.target.value);

    }
  }

  render() {
    return (
      <div>

        <div className="header">
          <h2>Shopping Cart</h2>
        </div>

        <div className="col-md-12">
          <div className="row">
            <div className="col-md-8">
              <div className="container">
                <Product products={this.state.products} addToCart={this.addToCart} />
              </div>
            </div>
            <div className="col-md-3 sidebar">
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                sizeProducts={this.sizeProducts}
                sortProducts={this.sortProducts}
              >
              </Filter>
              <Cart cartItems={this.state.cartItems} removeItems={this.removeItems} createOrder={this.createOrder} />
            </div>
          </div>

        </div>
      </div>
    )

  }
}



export default App;



