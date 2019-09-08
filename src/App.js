import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './site.css';

class App extends Component {
    state = {
        apiData:[ ]
    }
    
    componentDidMount() {
        fetch("https://api.nomics.com/v1/exchange-rates?key=bcef6b5bdf99849cca3fd290eb2b9a12")
        .then(response => response.json())
        .then(data => {
        console.log("got data", data);
        this.setState({
            apiData: data,
        });
        console.log('this.state.apiData', this.state.apiData);
        });
        }

  render() {
    
    return (
        <div className="App">
        
        <div className="chart-backing">

            <div className="header">
                    <h1> Crypto Exchange Rate</h1>
                    </div>
        <div className="chart">
        
            {this.state.apiData.filter((data)=> data.rate < 50 && data.rate > 15).map(data => (
            <div className="bar" onClick={() => alert(`${data.currency}  ${data.rate}`)} style={{height: `${data.rate}%`}}>
                 
                <div className="label">{data.currency}</div>
            </div>
            ))}
        {this.state.apiData.filter((data)=> data.rate > 100 && data.rate < 1500).map(data => (
            <div className="bar" onClick={() => alert(`${data.currency}  ${data.rate}`)} style={{height: `${data.rate*.30}%`}}>
                 
                <div className="label">{data.currency}</div>
            </div>
            ))}
            
            {this.state.apiData.filter((data)=> data.rate > 200 && data.rate < 1700).map(data => (
            <div className="bar" onClick={() => alert(`${data.currency}  ${data.rate}`)} style={{height: `${data.rate/23}%`}}>
                 
                <div className="label">{data.currency}</div>
            </div>
            ))}
            
            {this.state.apiData.filter((data)=> data.rate > 2000 && data.rate < 11000).map(data => (
            <div className="bar" onClick={() => alert(`${data.currency}  ${data.rate}`)} style={{height: `${data.rate/140}%`}}>
                 
                <div className="label">{data.currency}</div>
            </div>
            ))}
            </div>
    </div>
    </div>
    );
  }
}

export default App;
