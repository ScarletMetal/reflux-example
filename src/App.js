import React, { Component } from 'react';

import Form from './components/form'
import FormView from './components/form-view'
class App extends Component {
  render() {
    let items = [
      {name: '123', stage: 'auto'},
      {name: '456', stage: 'auto'},
      {name: '789', stage: 'teleop'},
      {name: '4586', stage: 'teleop'}
    ]
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
