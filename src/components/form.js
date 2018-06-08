import React from 'react'
import Reflux from 'reflux'

import formStoreActions from '../stores/form-store-actions'
import FormStore from '../stores/form-store'
import NumericInput from './numeric-question'
import RadioButtonGroup from '../components/radio-button-group'

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
        if (questionData.type === 'number')
          questions.push(<NumericInput name={questionData.name} min={questionData.min} stage={stage}/>)
        else if (questionData.type === 'enum')
          questions.push(<RadioButtonGroup name={questionData.name} stage={stage} options={questionData.options}/>)
      })
    })

    return <div>
      {questions} <br/>

      <button className="ui button blue"
              style={{maxWidth: '200px', width: '30vw'}}
              onClick={() => {
                formStoreActions.submit()
              }}
      >Submit</button>
    </div>
  }
}

export default Form