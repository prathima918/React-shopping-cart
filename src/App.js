import React from 'react';
import Product from './component/Product';
import data from './data.json';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      products: data.products,
      size: "",
      sort: "",

    }
  }
  render() {
    return (
      <div>
        <header>
          <h1>
            React shopping cart
        </h1>
        </header>
        <main>
          <div className="content">
            <div className="col-md-12 main">
              <Product products={this.state.products} />
            </div>
            <div className="sidebar">cart items</div>
          </div>


        </main>
      </div>
    )
  }
}



export default App;



