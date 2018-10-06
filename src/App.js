import React, { Component } from 'react';
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

const renderOptionsTags = (str,i) => {
  return(
    <option key={i+1} value={str}> {data[str].manufacturer}({data[str].year})</option>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <select>
          {
            Object.keys(data).map((str,i) => renderOptionsTags(str,i))
          }
        </select>
        
      </div>
    );
  }
}

export default App;
