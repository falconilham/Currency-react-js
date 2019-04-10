import React, { Component } from 'react';

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
      //console.log(res);
      //this.setState({
        //data: [res.rates]
      //})
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
    console.log(this.state.data)
    return (
     <div>
        {this.state.data.map(item =>
          <p>{item.name} - {item.value}</p>

          )}
      </div>
    );
  }
}

export default App;
