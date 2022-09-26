import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import updateFieldSetter from "../utils/updateFormFieldSetter";

function AddPlacePopup({ isOpen, onClose, onAddCard }) {
  //states
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const fieldSetters = {
    'popup__place-name': setName,
    'popup__place-url': setLink
  }

  //effects
  //clears form inputs on open
  React.useEffect(()=>{
    setLink('');
    setName('');
  },[isOpen]);

  //handlers
  function handleChange(e) {
    updateFieldSetter(fieldSetters, e.target.name, e.target.value)
  }

  function handleSubmit(e, submitButtonOnUpdate) {
    onAddCard({ link, name }, submitButtonOnUpdate);
  }

  return (
    <PopupWithForm name="newplace" title="Новое место" buttonLabel="Добавить" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} buttonLabelOnProcess="Добавление места...">
      <label className="popup__form-field">
        <input className="popup__form-input popup__place-name" id="place-name-input" name="popup__place-name"
          placeholder="Какие места привлекли?" required minLength="2" maxLength="30" onChange={handleChange} value={name}/>
        <span className="popup__form-error place-name-input-error">#</span>
      </label>
      <label className="popup__form-field">
        <input className="popup__form-input popup__place-url" id="place-url-input" name="popup__place-url"
          placeholder="Ссылка на картинку" type="url" required onChange={handleChange} value={link}/>
        <span className="popup__form-error place-url-input-error">#</span>
      </label>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
