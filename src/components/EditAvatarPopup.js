import { useRef, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarElement = useRef();

  const [link, setLink] = useState('');

  function handleChange(){
    setLink(avatarElement.current.value);
  }

  function handleSubmit(e){
    onUpdateAvatar(link);
  }

  return (
    <PopupWithForm name="editavatar" title="Обновить аватар" buttonLabel="Сохранить" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <label className="popup__form-field">
        <input ref={avatarElement} className="popup__form-input popup__avatar-link" id="avatar-input" name="popup__avatar-link"
          placeholder="Адресок подскажите?" type="url" required onChange={handleChange} />
        <span className="popup__form-error avatar-input-error">#</span>
      </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
