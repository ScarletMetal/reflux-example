import React from 'react'
import FormView from './components/form'
import RadioButtonGroup from './components/radio-button-group'
class ViewA extends React.Component {
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
      </div>
    )
  }
}