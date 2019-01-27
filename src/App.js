import React, { Component } from 'react';
import './App.css';
import InvoiceDashboard from './InvoiceDashboard';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div>Invoice App</div>
        </div>
        <div className="maincontent">
            <InvoiceDashboard/>
        </div>
      </div>
    );
  }
}

export default App;
