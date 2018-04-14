import Reflux from 'reflux'

import Actions from './view-store-actions'

class ViewStore extends Reflux.Store {
  constructor() {
    super()

    this.listenables = Actions

    this.state = {
      currentViewIndex: 0
    }

  }

  onSetView(index) {
    this.setState({currentViewIndex: index})
  }
}

export default ViewStore