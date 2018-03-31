import React from 'react'
import Reflux from 'reflux'
import FormStore from '../stores/form-store'
import Question from '../components/question'

class Form extends Reflux.Component {
  constructor(props) {
    super(props)

    this.items = props.items
    this.state = {}
    this.store = FormStore
  }

  render() {
    const questions = []
    this.items.forEach(item => {
      questions.push(<Question name={item.name} stage={item.stage}/>)
    })

    return <div>
      {questions}
    </div>
  }
}

export default Form