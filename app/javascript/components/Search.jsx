import React, { Component } from "react";
import SearchResult from './SearchResult'

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const results = this.props.searchResults.map( curr => {
      return (
        <SearchResult 
          key={curr.id} 
          currency={curr}
          handleSelect={this.props.handleSelect.bind(null, curr)} 
        />
      )
    })
    
    return (
      <div>
        <h1>Calculadora de carteira de criptomoeda</h1>
        <form>
          <div className="form-group">
            <label>Pesquise uma moeda:</label><br/>
            <input 
              onChange={this.props.handleChange}
              autoComplete="off" 
              type="text" 
              name="name" 
              placeholder="Ex: Bitcoin, Litecoin, Ethereum..."
              value={this.props.name} 
              className="field" />
          </div>
          <div className="currency-list">
            {results}
          </div>
        </form>
      </div>
    )
  }
}

export default Search;