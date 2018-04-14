import Reflux from 'reflux'
import React from 'react'

import FormStore from '../stores/form-store'
import formStoreActions from '../stores/form-store-actions'

class RadioButtonGroup extends Reflux.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedOption: undefined,
      stage: props.stage,
      name: props.name,
      options: props.options
    }

    this.store = FormStore
    
    this.state.selectedOption = this.state.options[0]
    formStoreActions.setData(this.state.stage, this.state.name, this.state.options[0])
  }

  updateOption(option) {
    this.setState({selectedOption: option})
    formStoreActions.setData(this.state.stage, this.state.name, option)
  }
  render() {
    const buttons = []

    this.state.options.forEach(option => {
      let className = 'ui button'
      if (option === this.state.form[this.state.stage][this.state.name])
        className += ' red'
      else
        className += ' black'
      buttons.push(
        <button className={className} onClick={() => this.updateOption(option.toString())}>{option}</button>
      )
    })

    return (
      <div>
        <b>{this.state.name}</b> <br/>
        <div className="ui buttons vertical">
          {buttons}
        </div>
      </div>
    )
  }
}

export default RadioButtonGroup