import React from "react";

import Card from "./Card";

import defaultUserPic from '../images/upic-blanc.jpg';
import btnEditUserPic from '../images/btn-edit-user.svg';
import btnEditUserInfo from '../images/btn-edit.svg';
import { currentUserContext } from "../contexts/currentUserContext";

function Main(props) {
  //States
  const [cards, setCards] = React.useState([]);

  //Contexts
  const currentUser = React.useContext(currentUserContext);
  const {name: userName, avatar: userAvatar, about: userDescription} = currentUser || {name: 'Still fetching...', avatar: defaultUserPic, about:'Still fetching...'}

  //Mount effect
  React.useEffect(() => {
    //Loads cards if we have currentUser info
    if (currentUser) {
      props.api
        .getInitialCards()
        .then(setCards
      )
        .catch(err => props.api.handleError(err))
    }
  }, [currentUser, props.api]);

  return (
    <main className="main">

      <section className="section section-user">
        <div className="section-user__pic-container">
          <img alt="User" className="section-user__pic" src={userAvatar} />
          <div className="section-user__pic-edit" onClick={props.onEditAvatar}>
            <img src={btnEditUserPic} alt="Сменмить аватарку" className="section-user__btn-edit-pic" />
          </div>
        </div>

        <div className="section-user__info">
          <div className="section-user__container">
            <h1 className="section-user__name">{userName }</h1>
            <button className="btn-edit section-user__edit" title="Редактировать профиль" name="section-user__edit-btn" type="button" onClick={props.onEditProfile}>
              <img alt="Редактировать профиль" className="btn-edit__img section-user__edit-btn" src={btnEditUserInfo} />
            </button>
          </div>
          <p className="section-user__description">{userDescription }</p>
        </div>
        <button className="section-user__addpost btn-plus" title="Добавить пост" type="button" onClick={props.onAddPlace}></button>
      </section>

      <section aria-label="Фотографии из путешествий!" className="section section-gallery">
        <ul className="section-gallery__grid">
          {cards.map(card => (<Card card={card} key={card._id} onCardClick={props.handleCardClick} />))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
