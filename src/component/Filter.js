import React, { Component } from 'react';
import './filter.css'

class Filter extends Component {
    render() {
        return (
            <div className="col-md-12 filter">
                <div className="row">
                    <div className="col-sm-3">
                        <h4>{this.props.count} products</h4>

                    </div>

                    <div className="col-sm-3">

                        <h4>sort</h4>
                        <select className="form-control"
                            value={this.props.sort}
                            onChange={this.props.sortProducts}>
                            <option>Latest</option>
                            <option>Highest</option>
                            <option>Lowest</option>
                        </select>
                    </div>

                    <div className="col-sm-3">

                        <h4>filter</h4>
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
            </div>
        )
    }
}

export default Filter;