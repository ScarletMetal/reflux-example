import React from 'react'
import Reflux from 'reflux'

import ViewStore from '../stores/view-store'

import ViewA from '../views/view-a'
import ViewB from '../views/view-b'

class ViewHolder extends Reflux.Component {
  constructor(props) {
    super(props)

    this.store = ViewStore
    this.views = [<ViewA/>, <ViewB/>]
  }

  render() {
    const {currentViewIndex} = this.state

    return <div style={{textAlign: 'center'}}>{this.views[currentViewIndex]}</div>
  }

}

export default ViewHolder