import React from "react";

import Card from "./Card";

import defaultUserPic from '../images/upic-blanc.jpg';
import btnEditUserPic from '../images/btn-edit-user.svg';
import btnEditUserInfo from '../images/btn-edit.svg';

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: undefined,
      userDescription: undefined,
      userAvatar: defaultUserPic,
      cards: []
    }
  }

  componentDidMount() {
    //Loads user info and then initial cards
    const userPromise = this.props.api.getUserMe();
    const initialCardsPromise = this.props.api.getInitialCards();

    Promise.all([userPromise, initialCardsPromise])
      .then(list => {
        const [udata, cardList] = list;

        this.setState({
          userName: udata.name,
          userDescription: udata.about,
          userAvatar: udata.avatar,
          cards: cardList
        })
      })
      .catch(err => this.props.api.handleError(err))
  }

  render() {
    return (
      <main className="main">

        <section className="section section-user">
          <div className="section-user__pic-container">
            <img alt="User" className="section-user__pic" src={this.state.userAvatar} />
            <div className="section-user__pic-edit" onClick={this.props.onEditAvatar}>
              <img src={btnEditUserPic} alt="Сменмить аватарку" className="section-user__btn-edit-pic" />
            </div>
          </div>

          <div className="section-user__info">
            <div className="section-user__container">
              <h1 className="section-user__name">{this.state.userName ?? 'Recieving...'}</h1>
              <button className="btn-edit section-user__edit" title="Редактировать профиль" name="section-user__edit-btn" type="button" onClick={this.props.onEditProfile}>
                <img alt="Редактировать профиль" className="btn-edit__img section-user__edit-btn" src={btnEditUserInfo} />
              </button>
            </div>
            <p className="section-user__description">{this.state.userDescription ?? 'Recieving...'}</p>
          </div>
          <button className="section-user__addpost btn-plus" title="Добавить пост" type="button" onClick={this.props.onAddPlace}></button>
        </section>

        <section aria-label="Фотографии из путешествий!" className="section section-gallery">
          <ul className="section-gallery__grid">
            {this.state.cards.map(card => (<Card card={card} key={card._id} onCardClick={this.props.handleCardClick}/>))}
          </ul>
        </section>
      </main>
    );
  }
}

