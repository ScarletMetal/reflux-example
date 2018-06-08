import React from 'react'
import Reflux from 'reflux'
import FormStore from '../stores/form-store'
import formStoreActions from '../stores/form-store-actions'

import {Button} from 'semantic-ui-react'

class NumericInput extends Reflux.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: props.name,
      stage: props.stage,
      min: props.min
    }
    this.store = FormStore
  }

  updateValue(event) {
    this.setData(event.target.value)
  }

  setData(value) {
    if (this.state.min && value < this.state.min) {
      formStoreActions.setData(this.state.stage, this.state.name, this.state.min)
    } else {
      formStoreActions.setData(this.state.stage, this.state.name, value)
    }
  }

  jumpValue(jump) {
    return () => {
      let val = parseInt(this.state.form[this.state.stage][this.state.name])
      val += jump
      this.setData(val)
    }
  }
  render() {
    return <div>
      <b> {this.state.name} </b> <br/>
      <div className="ui buttons">
        <Button color="blue" className="input-btn" onClick={this.jumpValue(-1).bind(this)}>-1</Button>
        <input type="number" className="ui button primary basic" onChange={((event) => {
          event.preventDefault()
          this.setData(event.target.data)
        }).bind(this)} style={{maxWidth: '150px'}} value={
          (() => {
            try{
              return this.state.form[this.state.stage][this.state.name]
            } catch(TypeError) {
              this.setData(this.state.min)
              return this.state.min
            }
          }).bind(this)()
        }/>
        <Button color="blue" className="input-btn" onClick={this.jumpValue(+1).bind(this)}>+1</Button>
      </div>
    </div>
  }
}

export default NumericInput