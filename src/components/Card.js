import React from "react";

function Card({card, onCardClick}) {
  function handleClick(){
    onCardClick(card)
  }

  return (
    (<li className="section-gallery__item place__item">
      <article className="place">
        <button className="place__trash" title="Удалить" type="button"></button>
        <img alt={card.name} className="place__img" src={card.link} onClick={handleClick}/>
        <div className="place__body">
          <h2 className="place__title">{card.name}</h2>
          <div className="place__like-container">
            <button className="place__like" title="Лайк!" type="button"></button>
            <div className="place__like-counter">{card.likes.length}</div>
          </div>
        </div>
      </article>
    </li>)
  )
}

export default Card;
