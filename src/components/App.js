import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import api from "../utils/Api";

import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

import React from 'react';

function App() {
  //Popups section
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditAvatarPopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="root">

      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        handleCardClick={handleCardClick}
        api={api} />
      <Footer />

      <PopupWithForm name="edituser" title="Редактировать профиль" buttonLabel="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <label className="popup__form-field">
          <input className="popup__form-input popup__user-name" id="name-input" name="popup__user-name"
            placeholder="Представься, путешественник" required minLength="2" maxLength="40" />
          <span className="popup__form-error name-input-error">#</span>
        </label>
        <label className="popup__form-field">
          <input className="popup__form-input popup__user-description" id="description-input"
            name="popup__user-description" placeholder="Что влечет тебя к движению?" required minLength="2"
            maxLength="200" />
          <span className="popup__form-error description-input-error">#</span>
        </label>
      </PopupWithForm>

      <PopupWithForm name="editavatar" title="Обновить аватар" buttonLabel="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <label className="popup__form-field">
          <input className="popup__form-input popup__avatar-link" id="avatar-input" name="popup__avatar-link"
            placeholder="Адресок подскажите?" type="url" required />
          <span className="popup__form-error avatar-input-error">#</span>
        </label>
      </PopupWithForm>



      <PopupWithForm name="newplace" title="Новое место" buttonLabel="Добавить" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label className="popup__form-field">
          <input className="popup__form-input popup__place-name" id="place-name-input" name="popup__place-name"
            placeholder="Какие места привлекли?" required minLength="2" maxLength="30" />
          <span className="popup__form-error place-name-input-error">#</span>
        </label>
        <label className="popup__form-field">
          <input className="popup__form-input popup__place-url" id="place-url-input" name="popup__place-url"
            placeholder="Адресок подскажите?" type="url" required />
          <span className="popup__form-error place-url-input-error">#</span>
        </label>
      </PopupWithForm>

      <PopupWithForm title="Уверены?" name="confirm" buttonLabel="Удалить" onClose={closeAllPopups}></PopupWithForm>

      <ImagePopup
        card={selectedCard}
        name="viewplace"
        handleClick={handleCardClick}
        handleClose={closeAllPopups}
      />

      {/* Popup with notification shows API errors */}
      {/* <div className="popup popup_errors">
      <div className="popup__content">
        <button className="popup__btn-close" title="Закрыть форму" type="button">
          <img alt="Закрыть" className="popup__btn-close-img" src={btnClosePopup} />
        </button>
        <h2 className="popup__title">Title</h2>
        <p className="popup__message"></p>
      </div>
    </div> */}

    </div>
  );
}

export default App;
