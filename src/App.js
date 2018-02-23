import React, { Component } from 'react';

import ContactList from './components/ContactList';

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <ContactList/>
        </React.Fragment>
    );
  }
}

export default App;
