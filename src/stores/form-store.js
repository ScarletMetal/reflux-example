import Reflux from 'reflux'
import Actions from './form-store-actions'
import Question from "../components/question"
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

  onSubmit() {
    axios.post('http://localhost/scouting-form', {match: form})
      .then(() => {
        console.log("submitted successfully")
      })
      .catch(err => {
        alert('error while submitting data')
        console.error(err)
      })
  }
}

export default FormStore
