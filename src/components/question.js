import React from 'react'
import Reflux from 'reflux'
import FormStore from '../stores/form-store'
import formStoreActions from '../stores/form-store-actions'

class Question extends Reflux.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: props.name,
      stage: props.stage,
      min: props.min,
      value: "0"
    }
    this.setData(0)
    this.store = FormStore
  }

  updateValue(event) {
    this.setData(event.target.value)
  }

  setData(value) {
    this.setState({value: value})
    formStoreActions.setData(this.state.stage, this.state.name, value)
  }

  jumpValue(jump) {
    return () => {
      let val = parseInt(this.state.value)
      val += jump
      this.setData(val)
    }
  }
  render() {

    return <div>
      <b> {this.state.name} </b> <br/>
      <button className="input-btn" onClick={this.jumpValue(-1).bind(this)}>-1</button>
      <input type="number" value={this.state.value} onChange={this.updateValue.bind(this)}/>
      <button className="input-btn" onClick={this.jumpValue(+1).bind(this)}>+1</button>
    </div>
  }
}

export default Question