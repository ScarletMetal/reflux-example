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
      value: props.min ? props.min : '0'
    }
    this.setData(0)
    this.store = FormStore
  }

  updateValue(event) {
    this.setData(event.target.value)
  }

  setData(value) {
    if (this.state.min && value < this.state.min) {
      this.setState({value: this.state.min})
      formStoreActions.setData(this.state.stage, this.state.name, this.state.min)
    } else {
      this.setState({value: value})
      formStoreActions.setData(this.state.stage, this.state.name, value)
    }
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
      <div className="ui buttons">
        <button className="input-btn ui button black" onClick={this.jumpValue(-1).bind(this)}>-1</button>
        <input type="number" className="ui button secondary basic" style={{maxWidth: '150px'}} value={this.state.value} onChange={this.updateValue.bind(this)}/>
        <button className="input-btn ui button black" onClick={this.jumpValue(+1).bind(this)}>+1</button>
      </div>
    </div>
  }
}

export default Question