import React from 'react'
import Form from '../components/form'
import RadioButtonGroup from '../components/radio-button-group'
class ViewA extends React.Component {

  shouldComponentUpdate(nProps, nState) {
    return false
  }

  render() {
    let items = {
      auto : [
        {name: 'Example 1', min: '0', type: 'number'},
        {name: 'Example 2', options: ['Yes', 'No'], type: 'enum'}
      ],
      teleop: [
        {name: 'Example 3', min: '1', type: 'number'},
        {name: 'Example 4', options: ['Option 1', 'Option 2', 'Option 3'] ,type: 'enum'}
      ]
    }
    return (
      <div>
        <Form items={items}/>
      </div>
    )
  }
}

export default ViewA