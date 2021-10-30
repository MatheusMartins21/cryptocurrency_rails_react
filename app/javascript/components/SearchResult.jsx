import React, { Component } from 'react'

class SearchResult extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li
        key={this.props.currency.id}
        data-id={this.props.currency.id}
        onClick={this.props.handleSelect}
        className="currency-list-item">
        <a
          href="#" 
          className="currency">
          <span>{this.props.currency.name}</span>
          <span className="currency_symbol">{this.props.currency.currency_symbol}</span>
        </a>
      </li>
    )
  }
}

export default SearchResult