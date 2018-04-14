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

    return this.views[currentViewIndex]
  }


}