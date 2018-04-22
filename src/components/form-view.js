import React from 'react'
import Reflux from 'reflux'
import FormStore from '../stores/form-store'

class FormView extends Reflux.Component {
  constructor(props) {
    super(props)

    this.state = {}
    this.store = FormStore
  }

  render() {
    let form = this.state.form
    let items = []

    Object.keys(form).forEach(stage => {
      items.push(<b>{stage}</b>)
      items.push(<br/>)
      Object.keys(form[stage]).forEach(item => {
        items.push(<b style={{color: "black"}}>{`${item} : ${form[stage][item]}`}</b>)
        items.push(<br/>)
      })
    })

    return (<div>
      {items}
    </div>)
  }
}

export default FormView