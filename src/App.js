import React, { Component } from 'react';
import './App.css';

class App extends Component {

constructor()
{
  super();
  this.state={
    data : [],
  }
  this.getdata();
}

getdata()
{
  let data= fetch('https://api.exchangeratesapi.io/latest?base=IDR').then((resp)=>{
    resp.json().then((res) =>{ 
      console.log(res.base);
      this.setState({
        data: [res.base]
      })
      let tai = []
      for(let item in res.rates){
        tai.push({
          name: item,
          value: res.rates[item]
        })
        this.setState({
          data: tai
        })
      }
    })
  })
    
}

  render() {
    return (
     <div className="container">
      <div className="App">
        <div className="header">
          <h1>{this.state.data.base}</h1>
        </div>
        {this.state.data.map(item =>
          <p>{item.name} - {item.value}</p>

          )}
        
        
      </div>
    </div>
    );
  }
}

export default App;
