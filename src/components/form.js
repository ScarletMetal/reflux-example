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

    Object.keys(this.items).forEach(stage => {
      const questionsData = this.items[stage]
      questions.push(<h1>{stage}</h1>)
      questionsData.forEach(questionData => {
        questions.push(<Question name={questionData.name} min={questionData.min} stage={stage}/>)
      })
    })

    return <div>
      {questions}
    </div>
  }
}

export default Form