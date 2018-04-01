import React, { Component } from 'react';

import Form from './components/form'
import FormView from './components/form-view'
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
      <div>
        <Form items={items}/>
        <hr/>
        <FormView/>
      </div>
    )
  }
}

export default App;
