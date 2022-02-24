import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input data-testid="name-input" id="name" type="text" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <textarea data-testid="description-input" id="descricao" type="text" />
        </label>
        <label htmlFor="atrib-1">
          Attr1:
          <input data-testid="attr1-input" id="atrib-1" type="number" />
        </label>
        <label htmlFor="atrib-2">
          Attr2:
          <input data-testid="attr2-input" id="atrib-2" type="number" />
        </label>
        <label htmlFor="atrib-3">
          Attr3:
          <input data-testid="attr3-input" id="atrib-3" type="number" />
        </label>
        <label htmlFor="url-img">
          Imagem:
          <input data-testid="image-input" id="url-img" type="text" />
        </label>
        <label htmlFor="raridade">
          Raridade:
          <select data-testid="rare-input" name="raridade" id="raridade">
            <option value="normal"> normal </option>
            <option value="raro"> raro </option>
            <option value="muito raro"> muito raro</option>
          </select>
        </label>
        <label htmlFor="sup-try">
          Super Trunfo:
          <input data-testid="trunfo-input" id="sup-try" type="checkbox" />
        </label>
        <button data-testid="save-button" type="submit">
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;