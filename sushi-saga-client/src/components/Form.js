import React from 'react'

const initilaState = {
  addBalance: ""
}

class Form extends React.Component {

  state = initilaState

  changeHandler = (e) => {
    this.setState({
     [e.target.name]: e.target.value
    })
    console.log(this.state.addBalance)
  }

  submit = (e) => {
    e.preventDefault()
    this.props.updateBalance(this.state.addBalance)
    this.setState(initilaState)
  }

  render(){
  return(
   
    <form className="form" onSubmit={this.submit}>
      <input name="addBalance" type="number" onChange={this.changeHandler} value={this.state.addBalance} placeholder="Enter Amount"/>
      <input type="submit" value="Add More Money" />
    </form>
  
  )
  }
}
export default Form