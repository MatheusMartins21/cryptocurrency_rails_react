import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

class Portfolio extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const portfolioItems = this.props.portfolio.map( (item, index) => <PortfolioItem key={index} item={item}/>)
    const total = this.props.portfolio.reduce( (total, curr) => total + curr.value, 0)
    const formatted_total = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(total);

    return (
      <div>
        <div className="portfolio-value">
          <div className="portfolio-value--header">O valor total da sua carteira é:</div>
          <div className="portfolio-value--content">{formatted_total}</div>
        </div>
        <div className="portfolio-items">
          {portfolioItems}
        </div>
      </div>
    )
  }
}

export default Portfolio