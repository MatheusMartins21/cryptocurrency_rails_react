import React, { Component } from 'react';

class PortfolioItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <div className="header">Moeda:</div>
            <div className="text">{this.props.item.currency.name}</div>
          </div>

          <div className="col">
            <div className="header">Preço atual:</div>
            <div className="text">${this.props.item.current_price}</div>
          </div>

          <div className="col">
            <div className="header">Quantidade em sua carteira:</div>
            <div className="text">{this.props.item.amount}</div>
          </div>

          <div className="col">
            <div className="header">Valor atual:</div>
            <div className="text">${this.props.item.value}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default PortfolioItem