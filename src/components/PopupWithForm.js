import React from "react";

import btnClosePopup from '../images/btn-close.svg';

function PopupWithForm({name, isOpen, onClose, title, children, buttonLabel = 'Save', onSumbit}) {

  return (
    <div className={`popup popup_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__content">
        <button className="popup__btn-close" title="Закрыть форму" type="button" onClick={onClose}>
          <img alt="Закрыть" className="popup__btn-close-img" src={btnClosePopup} />
        </button>
        <h2 className="popup__title">{title}</h2>

        <form className="popup__form" name={`popup__form_${name}`} onSubmit={onSumbit} noValidate>
          {children}
          <button className="popup__submit" type="submit">{buttonLabel}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
