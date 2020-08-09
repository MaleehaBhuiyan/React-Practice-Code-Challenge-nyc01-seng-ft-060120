import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    spliceStart: 0,
    spliceEnd: 4,
    sushiArray: []
  }

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

  render() {
    return (
      <div className="app">
        <SushiContainer sushiArray={this.chooseFourSushis()} moreButton={this.moreButton} />
        <Table />
      </div>
    );
  }
}

export default App;

