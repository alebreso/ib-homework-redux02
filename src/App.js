import React, { Component } from 'react';
import store from './Store'
import ModelDetails from './components/ModelDetails'
import './App.css';

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}

class App extends Component {
  state={}

  updateSelection = (event) => {
    this.setState({value:event.target.value})
  }

  renderOptionsTags = (str,i) => {
    return(
      <option key={i+1} value={str}> {data[str].manufacturer}({data[str].year})</option>
    )
  }

  handleClick = () => {
    const computerData = {...data[this.state.value],value:this.state.value}
    store.dispatch({
      type:"ADD_MODEL",
      payload: computerData
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>++ADD++</button>
        <select onChange={this.updateSelection} value={this.state.value}>
          <option value="">-- pick a model --</option>
          {
            Object.keys(data).map((str,i) => this.renderOptionsTags(str,i))
          }
        </select>
        <ModelDetails />
      </div>
    );
  }
}


export default App
