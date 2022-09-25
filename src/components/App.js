import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import api from "../utils/Api";
import { currentUserContext } from '../contexts/currentUserContext';

import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

import React, { useState } from 'react';
import EditProfilePopup from './EditProfilePopup';

function App() {
  //Popups section
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const [currentUser, setCurrentUser] = useState(undefined);

  //On mount effects
  React.useEffect(() => {
    //retrieve currentUser
    api.getUserMe()
      .then(userMe => {
        setCurrentUser(userMe);
      })
      .catch(err => api.handleError(err));
  }, [])

  //handlers
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
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

  function handleUpdateUser(newInfo){
    api.pathchUserMe(newInfo)
    .then(res => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch(err => api.handleError(err));
  }

  return (
    <currentUserContext.Provider value={currentUser}>
      <div className="root">

        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          handleCardClick={handleCardClick}
          api={api} />
        <Footer />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

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
    </currentUserContext.Provider>
  );
}

export default App;
