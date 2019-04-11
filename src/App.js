import React, { Component } from 'react';
import './App.css';

class App extends Component {

constructor()
{
  super();
  this.state={
    data : [],
    ratesdefault : "value" 
  }
  this.getdata();
}

getdata()
{
  let data= fetch('https://api.exchangeratesapi.io/latest?base=USD').then((resp)=>{
    resp.json().then((res) =>{ 
      console.log(res.rates.USD);
      this.setState({
        currentbase: [res.base],
        currentrates:"Default Base Rates is"+" "+parseInt([res.rates.USD])
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
          <div className="header-left">
          {this.state.currentbase}
          </div>
          <div className="header-right">
            <input type="number" placeholder={this.state.currentrates}/>
          </div>
        </div>
        {this.state.data.map(item =>
          <p>{item.name} - {item.value * 2}</p>

          )}
        
        
      </div>
    </div>
    );
  }
}

export default App;
