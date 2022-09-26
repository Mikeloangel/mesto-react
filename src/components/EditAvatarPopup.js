import { useEffect, useRef, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  //Refs
  const avatarElement = useRef();

  //States
  const [link, setLink] = useState('');

  //Effect
  //clears form input on open
  useEffect(()=>{
    setLink('');
  },[isOpen]);

  //Handlers
  function handleChange(){
    setLink(avatarElement.current.value);
  }

  function handleSubmit(e, submitButtonOnUpdate){
    onUpdateAvatar(link, submitButtonOnUpdate);
  }

  return (
    <PopupWithForm
      name="editavatar"
      title="Обновить аватар"
      buttonLabel="Сохранить"
      buttonLabelOnProcess="Обновление..."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>

      <label className="popup__form-field">
        <input ref={avatarElement} className="popup__form-input popup__avatar-link" id="avatar-input" name="popup__avatar-link"
          placeholder="Адресок подскажите?" type="url" required onChange={handleChange} value={link} />
        <span className="popup__form-error avatar-input-error">#</span>
      </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
