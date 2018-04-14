import React, { Component } from 'react';

import Form from './components/form'
import FormView from './components/form-view'
import RadioButtonGroup from './components/radio-button-group'

import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css'
class App extends Component {
  render() {
    let items = {
      auto : [
        {name: 'Example 1', min: '0'}
      ],
      teleop: [
        {name: 'Example 2', min: '1'}
      ]
    }

    return (
      <div className="text-center">
        <Form items={items}/>
        <RadioButtonGroup options={['option 1', 'option 2', 'option 3']} stage="teleop" name="Example 3"/>
        <hr/>
        <FormView/>
      </div>
    )
  }
}

export default App;
