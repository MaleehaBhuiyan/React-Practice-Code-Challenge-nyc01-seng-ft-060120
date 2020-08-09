import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  // state = {
  //   spliceStart: 0,
  //   spliceEnd: 4,
  //   sushiArray: []
  // }

  // moreButton = () => {
  //   this.setState({ spliceStart: this.state.spliceStart + 4,  spliceEnd: this.state.spliceEnd + 4})
  // }

  render(){

    let sushiArray = this.props.sushiArray.map(sushi => {return <Sushi key={sushi.id} sushi={sushi} addPlate={this.props.addPlate} balance={this.props.balance} />})

    return (
      <Fragment>
        <div className="belt">
          {
            sushiArray
          }
          <MoreButton moreButton={this.props.moreButton} />
        </div>
      </Fragment>
    )

  }

}

export default SushiContainer

/*

state in sushi container 

data.splice({this.state.spliceStart}: {this.state.spliceEnd})





*/