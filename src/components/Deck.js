import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Deck extends Component {
  render() {
    const { cardList } = this.props;
    return (
      <div>
        {cardList.map((card) => (
          <div key={ card.cardName }>
            {card.cardTrunfo === true ? <span>Super Trunfo</span> : ''}
            <h2>{card.cardName}</h2>
            <span>{card.cardRare}</span>
            <img src={ card.cardImage } alt="imagem da carta" />
            <span>{`Attr1: ${card.cardAttr1}`}</span>
            <span>{`Attr2: ${card.cardAttr2}`}</span>
            <span>{`Attr3: ${card.cardAttr3}`}</span>
            <h3>{card.cardDescription}</h3>
          </div>
        ))}
      </div>
    );
  }
}

Deck.propTypes = {
  cardList: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  })).isRequired,
};

export default Deck;
