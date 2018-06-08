import Reflux from 'reflux'
import React from 'react'

import FormStore from '../stores/form-store'
import formStoreActions from '../stores/form-store-actions'

import {Button} from 'semantic-ui-react'

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
  }

  updateOption(option) {
    this.setState({selectedOption: option})
    formStoreActions.setData(this.state.stage, this.state.name, option)
  }
  render() {
    const buttons = []

    this.state.options.forEach(option => {
      let color = 'gray'
      if (option === this.state.form[this.state.stage][this.state.name])
        color = ' blue'

      buttons.push(
        <Button color={color} onClick={() => this.updateOption(option.toString())}>{option}</Button>
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