import React from 'react';
import Product from './component/Product';
import data from './data.json';
import Filter from './component/Filter';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      products: data.products,
      size: "",
      sort: "",

    }
  }

  sortProducts = (event) => {
    const sort = event.target.value;
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "Lowest"
            ? a.price > b.price ? 1 : -1 :
            sort === "Highest"
              ? a.price > b.price ? 1 : -1 :
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
      <div className="container">
        <nav>
          <h1>
            React shopping cart
        </h1>
        </nav>
        <main>
          <div className="content">
            <div className="col-md-12 main">
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                sizeProducts={this.sizeProducts}
                sortProducts={this.sortProducts}
              >
              </Filter>

              <Product products={this.state.products} />
            </div>
            {/* <div className="sidebar">cart items</div> */}
          </div>


        </main>
      </div>
    )
  }
}



export default App;



