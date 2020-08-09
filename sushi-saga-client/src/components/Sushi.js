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
  }

  render(){

    return (
      <div className="sushi">
        <div className="plate" 
            onClick={this.handleClick}>
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