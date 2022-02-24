import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <div>
          <Form />
          <Card />
        </div>
      </>
    );
  }
}

export default App;
