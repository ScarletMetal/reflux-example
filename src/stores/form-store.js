import Reflux from 'reflux'
import Actions from './form-store-actions'
import Question from "../components/question";

class FormStore extends Reflux.Store {
  constructor() {
    super()
    this.listenables = Actions
    this.state = {
      form: {
      }
    }
  }

  onSetData(stage, key, value) {
    const form = this.state.form
    if (!form[stage]) form[stage] = {}
    form[stage][key] = value
    this.setState({form: form})
    console.log(`${key} - ${value}`)
  }

  onReset() {
    this.setState({form: {}})
  }
}

export default FormStore
