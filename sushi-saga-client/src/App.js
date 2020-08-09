import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    spliceStart: 0,
    spliceEnd: 4,
    eaten: [],
    sushiArray: []
  }

  // addPlate = () => {
  //   array << 1
  // }

  componentDidMount(){
    fetch(`${API}`)
    .then(response => response.json())
    .then(sushiData => this.setState({ sushiArray:sushiData }))
  }

  chooseFourSushis = () => {
    return this.state.sushiArray.slice(this.state.spliceStart, this.state.spliceEnd)
  }

  moreButton = () => {

    let newSpliceStart = this.state.spliceStart + 4 
    let newSpliceEnd = this.state.spliceEnd + 4 
    this.setState({ spliceStart: newSpliceStart, spliceEnd: newSpliceEnd})
    // this.setState({ sushiArray: this.state.sushiArray.splice(this.state.spliceStart, this.state.spliceEnd) })
  }

  addPlate = (sushi) => {

    this.setState({
        eaten: [...this.state.eaten, sushi]
    })
    // const newMoney = this.state.money - sushi.price

    // if (!this.state.eaten.includes(sushi) && newMoney >=0 ) {
    //   this.setState({
    //     eaten: [...this.state.eaten, sushi],
    //     money: newMoney
    //   })
    // }
  }

  render() {

    return (
      <div className="app">
        <SushiContainer addPlate={this.addPlate} sushiArray={this.chooseFourSushis()} moreButton={this.moreButton} />
        <Table eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;

