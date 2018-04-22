import React from 'react'
import Reflux from 'reflux'
import {Menu} from 'semantic-ui-react'

import ViewStore from '../stores/view-store'
import viewStoreActions from '../stores/view-store-actions'

class MainMenu extends Reflux.Component {
  constructor(props) {
    super(props)
    this.store = ViewStore
  }

  render() {
    const items = [
      {name: 'View 1'},
      {name: 'View 2'}
    ]

    const onItemClick = (event, data) => {
      viewStoreActions.setView(data.index)
    }

    return <Menu onItemClick={onItemClick} items={items}/>
  }

}

export default MainMenu