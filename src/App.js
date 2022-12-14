import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardList: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.validateSaveButton = this.validateSaveButton.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.validateSaveButton());
  }

  onSaveButtonClick(element) {
    element.preventDefault();
    const { state } = this;

    const objcs = {
      cardRare: state.cardRare,
      cardName: state.cardName,
      cardImage: state.cardImage,
      cardDescription: state.cardDescription,
      cardAttr1: state.cardAttr1,
      cardAttr2: state.cardAttr2,
      cardAttr3: state.cardAttr3,
      cardTrunfo: state.cardTrunfo,
    };
    this.setState((prevState) => ({ cardList: [...prevState.cardList, objcs] }));

    if (state.cardTrunfo === true) {
      this.setState({ hasTrunfo: true });
    }
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
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
    } else if (state.hasTrunfo === true && state.cardTrunfo === true) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  render() {
    const { state, onInputChange, onSaveButtonClick } = this;
    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <div>
          <Form
            onInputChange={ onInputChange }
            isSaveButtonDisabled={ state.isSaveButtonDisabled }
            onSaveButtonClick={ onSaveButtonClick }
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
          {/* https://github.com/tryber/sd-019-c-project-tryunfo/pull/3/commits/86cfdb9931836ce29243f6d09078a411db402ef7 */}
          <Deck
            cardList={ state.cardList }
          />
        </div>
      </>
    );
  }
}

export default App;
