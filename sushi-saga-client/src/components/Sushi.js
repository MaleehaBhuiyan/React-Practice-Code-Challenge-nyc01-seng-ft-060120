import React, { Fragment } from 'react'

class Sushi extends React.Component{

  state = {
    img_src: this.props.sushi.img_url
  }

  handleClick = () => {
    let newImg = this.props.img_url
      this.setState({
        img_src: newImg
    })

    this.props.addPlate(this.props.sushi)

    // if(this.props.balance > this.props.sushi.price){
    //   this.props.addPlate(this.props.sushi)
    // }
    // else{
    //   this.alert
    // }
  }


  balanceClick = () => {
    if(this.props.balance > this.props.sushi.price){
      this.handleClick()
    }
    else{
      alert("You don't have enough money! Add more money!!!")
    }
  }


  render(){

    return (
      <div className="sushi">
        <div className="plate" 
            onClick={this.balanceClick}>
          { 
            /* Tell me if this sushi has been eaten! */ 
            false ?
              null
            :
              <img src={this.state.img_src} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi