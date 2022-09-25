import { useContext, useEffect, useState } from "react";
import { currentUserContext } from "../contexts/currentUserContext";
import updateFieldSetter from "../utils/updateFormFieldSetter";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  //Context
  const currentUser = useContext(currentUserContext)

  //states
  const [name, setName] = useState(currentUser?.name || '');
  const [description, setDescription] = useState(currentUser?.about || '');

  const fieldSetters = {
    'popup__user-name': setName,
    'popup__user-description': setDescription
  }

  //effects
  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser]);

  //handlers
  function handleChange(e) {
    updateFieldSetter(fieldSetters, e.target.name, e.target.value);
  }

  function handleSubmit() {
    onUpdateUser({ name, about: description });
  }

  return (
    <PopupWithForm name="edituser" title="Редактировать профиль" buttonLabel="Сохранить" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <label className="popup__form-field">
        <input className="popup__form-input popup__user-name" id="name-input" name="popup__user-name"
          placeholder="Представься, путешественник" required minLength="2" maxLength="40" onChange={handleChange} value={name} />
        <span className="popup__form-error name-input-error">#</span>
      </label>
      <label className="popup__form-field">
        <input className="popup__form-input popup__user-description" id="description-input"
          name="popup__user-description" placeholder="Что влечет тебя к движению?" required minLength="2"
          maxLength="200" onChange={handleChange} value={description} />
        <span className="popup__form-error description-input-error">#</span>
      </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
