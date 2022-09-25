import { useContext, useEffect, useState } from "react";
import { currentUserContext } from "../contexts/currentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  //Context
  const currentUser = useContext(currentUserContext)

  //states
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const fieldSetters = {
    'popup__user-name': setName,
    'popup__user-description': setDescription
  }

  //effects
  useEffect(() => {
    setName(currentUser?.name);
    setDescription(currentUser?.about);
  },[currentUser]);

  //handlers
  function handleChange(e) {
    if (fieldSetters[e.target.name] && typeof fieldSetters[e.target.name] === 'function') {
      fieldSetters[e.target.name](e.target.value);
    }
  }

  function handleSubmit(e){
    e.preventDefault();
    onUpdateUser({name,about:description});
  }

  return (
    <PopupWithForm name="edituser" title="Редактировать профиль" buttonLabel="Сохранить" isOpen={isOpen} onClose={onClose} onSumbit={handleSubmit}>
      <label className="popup__form-field">
        <input className="popup__form-input popup__user-name" id="name-input" name="popup__user-name"
          placeholder="Представься, путешественник" required minLength="2" maxLength="40" onChange={handleChange}  />
        <span className="popup__form-error name-input-error">#</span>
      </label>
      <label className="popup__form-field">
        <input className="popup__form-input popup__user-description" id="description-input"
          name="popup__user-description" placeholder="Что влечет тебя к движению?" required minLength="2"
          maxLength="200" onChange={handleChange}/>
        <span className="popup__form-error description-input-error">#</span>
      </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
