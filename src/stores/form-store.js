import Reflux from 'reflux'
import Actions from './form-store-actions'
import axios from 'axios'

class FormStore extends Reflux.Store {
  constructor() {
    super()
    this.listenables = Actions
    this.state = {
      form: {}
    }
  }

  onSetData(stage, key, value) {
    const form = this.state.form
    if (!form[stage]) form[stage] = {}
    form[stage][key] = value
    this.setState({form: form})
  }

  onReset() {
    this.setState({form: {}})
  }

}

export default FormStore
