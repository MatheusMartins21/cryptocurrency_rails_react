import React, { Component } from "react";

class Calculate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Quanto {this.props.active_currency.name} você possui?</h1>
        <form onSubmit={this.props.handleSubmit}>
          <div className="form-group">
            <label>Insira o valor possuído:</label><br/>
            <input 
              onChange={this.props.handleChange}
              autoComplete="off" 
              type="text" 
              name="amount" 
              placeholder="Quanto você possui?"
              value={this.props.amount} 
              className="field" />
          </div>
          <div className="form-group">
            <input 
              type="submit" 
              className="calculate-btn" 
              value="Calcule meu total" />
          </div>
        </form>
      </div>
    )
  }
}

export default Calculate;