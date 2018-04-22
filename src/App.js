import React, { Component } from 'react';


import MainMenu from './views/main-menu'
import ViewHolder from './views/view-holder'

import 'semantic-ui-css/semantic.min.css'
class App extends Component {
  render() {
    return <div>
      <MainMenu/>
      <ViewHolder/>
    </div>
  }
}

export default App;
