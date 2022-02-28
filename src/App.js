import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.validateSaveButton = this.validateSaveButton.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.validateSaveButton());
  }

  validateSaveButton() {
    const { state } = this;
    const max = 90;
    const min = 0;
    const sum = 210;

    if (
      state.cardName !== ''
    && state.cardImage !== ''
    && state.cardDescription !== ''
    && parseInt(state.cardAttr1, 10) >= min
    && parseInt(state.cardAttr2, 10) >= min
    && parseInt(state.cardAttr3, 10) >= min
    && parseInt(state.cardAttr1, 10) <= max
    && parseInt(state.cardAttr2, 10) <= max
    && parseInt(state.cardAttr3, 10) <= max
    && parseInt(state.cardAttr1, 10)
    + parseInt(state.cardAttr2, 10)
    + parseInt(state.cardAttr3, 10) <= sum
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  render() {
    const { state, onInputChange } = this;
    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <div>
          <Form
            onInputChange={ onInputChange }
            isSaveButtonDisabled={ state.isSaveButtonDisabled }
          />
          <Card
            cardName={ state.cardName }
            cardDescription={ state.cardDescription }
            cardAttr1={ state.cardAttr1 }
            cardAttr2={ state.cardAttr2 }
            cardAttr3={ state.cardAttr3 }
            cardImage={ state.cardImage }
            cardRare={ state.cardRare }
            cardTrunfo={ state.cardTrunfo }
            hasTrunfo={ state.hasTrunfo }
          />
        </div>
      </>
    );
  }
}

export default App;
