import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;

    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input
            data-testid="name-input"
            id="name"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
            name="cardName"
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <textarea
            data-testid="description-input"
            id="descricao"
            type="text"
            value={ cardDescription }
            onChange={ onInputChange }
            name="cardDescription"
          />
        </label>
        <label htmlFor="attr1">
          Attr1:
          <input
            data-testid="attr1-input"
            id="attr1"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="cardAttr1"
          />
        </label>
        <label htmlFor="attr2">
          Attr2:
          <input
            data-testid="attr2-input"
            id="attr2"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
            name="cardAttr2"
          />
        </label>
        <label htmlFor="attr3">
          Attr3:
          <input
            data-testid="attr3-input"
            id="attr3"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
            name="cardAttr3"
          />
        </label>
        <label htmlFor="url-img">
          Imagem:
          <input
            data-testid="image-input"
            id="url-img"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
            name="cardImage"
          />
        </label>
        <label htmlFor="raridade">
          Raridade:
          <select
            data-testid="rare-input"
            id="raridade"
            value={ cardRare }
            onChange={ onInputChange }
            name="cardRare"
          >
            <option value="normal"> normal </option>
            <option value="raro"> raro </option>
            <option value="muito raro"> muito raro</option>
          </select>
        </label>
        {hasTrunfo ? <p> Você já tem um Super Trunfo em seu baralho </p>
          : (
            <label htmlFor="trunfo">
              Super Trunfo:
              <input
                onChange={ onInputChange }
                data-testid="trunfo-input"
                id="trunfo"
                type="checkbox"
                checked={ cardTrunfo }
                name="cardTrunfo"
              />
            </label>
          )}
        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Form;
