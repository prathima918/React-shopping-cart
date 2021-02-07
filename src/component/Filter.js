import React, { Component } from 'react';
import './filter.css'

class Filter extends Component {
    render() {
        return (

            <div>
                <div className="sort col-sm-12">

                    <p>SORT</p>
                    <select className="form-control"
                        value={this.props.sort}
                        onChange={this.props.sortProducts}>
                        <option>Latest</option>
                        <option>Highest</option>
                        <option>Lowest</option>
                    </select>
                </div>

                <div className="col-sm-12">

                    <p>FILTER</p>
                    <select
                        className="form-control"
                        value={this.props.size}
                        onChange={this.props.sizeProducts}>
                        <option>All</option>
                        <option>xl</option>
                        <option>xxl</option>
                        <option>l</option>
                        <option>x</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Filter;