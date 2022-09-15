import blancUserPic from './images/upic-blanc.jpg';
import btnEditUserPic from './images/btn-edit-user.svg';
import btnEditUserInfo from './images/btn-edit.svg';
import btnClosePopup from './images/btn-close.svg';

function App() {
  return (
    <>
    <div class="root">
    <header class="section section-header">
      <div class="section-header__logo"></div>
    </header>
    <main class="main">

      <section class="section section-user">
        <div class="section-user__pic-container">
          <img alt="User" class="section-user__pic" src={blancUserPic}/>
          <div class="section-user__pic-edit">
            <img src={btnEditUserPic} alt="Сменмить аватарку" class="section-user__btn-edit-pic" />
          </div>
        </div>

        <div class="section-user__info">
          <div class="section-user__container">
            <h1 class="section-user__name">Name</h1>
            <button class="btn-edit section-user__edit" title="Редактировать профиль" name="section-user__edit-btn"
              type="button">
              <img alt="Редактировать профиль" class="btn-edit__img section-user__edit-btn" src={btnEditUserInfo} />
            </button>
          </div>
          <p class="section-user__description"></p>
        </div>
        <button class="section-user__addpost btn-plus" title="Добавить пост" type="button"></button>
      </section>

      <section aria-label="Фотографии из путешествий!" class="section section-gallery">
        <ul class="section-gallery__grid">

        </ul>
      </section>
    </main>
    <footer class="section section-footer">
      <p class="section-footer__copyright">&copy;&nbsp;2022 Mesto&nbsp;Russia X Варушичев&nbsp;Михаил</p>
    </footer>

    <div class="popup popup_edituser">
      <div class="popup__content">
        <button class="popup__btn-close" title="Закрыть форму" type="button">
          <img alt="Закрыть" class="popup__btn-close-img" src={btnClosePopup} />
        </button>
        <h2 class="popup__title">Редактировать профиль</h2>

        <form class="popup__form" name="popup__form_edituser" novalidate>
          <label class="popup__form-field">
            <input class="popup__form-input popup__user-name" id="name-input" name="popup__user-name"
              placeholder="Представься, путешественник" required minlength="2" maxlength="40" />
            <span class="popup__form-error name-input-error">#</span>
          </label>
          <label class="popup__form-field">
            <input class="popup__form-input popup__user-description" id="description-input"
              name="popup__user-description" placeholder="Что влечет тебя к движению?" required minlength="2"
              maxlength="200" />
            <span class="popup__form-error description-input-error">#</span>
          </label>
          <button class="popup__submit" type="submit">Сохранить</button>
        </form>
      </div>
    </div>


    <div class="popup popup_editavatar">
      <div class="popup__content">
        <button class="popup__btn-close" title="Закрыть форму" type="button">
          <img alt="Закрыть" class="popup__btn-close-img" src={btnClosePopup} />
        </button>
        <h2 class="popup__title">Обновить аватар</h2>

        <form class="popup__form" name="popup__form_editavatar" novalidate>
          <label class="popup__form-field">
            <input class="popup__form-input popup__avatar-link" id="avatar-input" name="popup__avatar-link"
              placeholder="Адресок подскажите?" type="url" required />
            <span class="popup__form-error avatar-input-error">#</span>
          </label>
          <button class="popup__submit" type="submit">Сохранить</button>
        </form>
      </div>
    </div>

    <div class="popup popup_newplace">
      <div class="popup__content">
        <button class="popup__btn-close" title="Закрыть форму" type="button">
          <img alt="Закрыть" class="popup__btn-close-img" src={btnClosePopup} />
        </button>
        <h2 class="popup__title">Новое место</h2>

        <form class="popup__form" name="popup__form_newplace" novalidate>
          <label class="popup__form-field">
            <input class="popup__form-input popup__place-name" id="place-name-input" name="popup__place-name"
              placeholder="Какие места привлекли?" required minlength="2" maxlength="30" />
            <span class="popup__form-error place-name-input-error">#</span>
          </label>
          <label class="popup__form-field">
            <input class="popup__form-input popup__place-url" id="place-url-input" name="popup__place-url"
              placeholder="Адресок подскажите?" type="url" required />
            <span class="popup__form-error place-url-input-error">#</span>
          </label>
          <button class="popup__submit" type="submit">Создать</button>
        </form>
      </div>
    </div>

    <div class="popup popup_viewplace">
      <div class="popup__content popup__content_viewplace">
        <button class="popup__btn-close" title="Закрыть форму" type="button">
          <img alt="Закрыть" class="popup__btn-close-img" src={btnClosePopup} />
        </button>
        <figure class="popup__fig">
          <img src="#" alt="пикча" class="popup__fig-img" />
          <figcaption class="popup__fig-caption">Описание</figcaption>
        </figure>
      </div>
    </div>

    <div class="popup popup_confirm">
      <div class="popup__content">
        <button class="popup__btn-close" title="Закрыть форму" type="button">
          <img alt="Закрыть" class="popup__btn-close-img" src={btnClosePopup} />
        </button>
        <h2 class="popup__title">Sure?</h2>

        <form class="popup__form" name="popup__form_confirm" novalidate>
          <button class="popup__submit" type="submit">Да</button>
        </form>
      </div>
    </div>

    <div class="popup popup_errors">
      <div class="popup__content">
        <button class="popup__btn-close" title="Закрыть форму" type="button">
          <img alt="Закрыть" class="popup__btn-close-img" src={btnClosePopup} />
        </button>
        <h2 class="popup__title">Title</h2>
        <p class="popup__message"></p>
      </div>
    </div>

  </div>

  <template id="place">
    <li class="section-gallery__item place__item">
      <article class="place">
        <button class="place__trash" title="Удалить" type="button"></button>
        <img alt="Плэйс" class="place__img" src="#" />
        <div class="place__body">
          <h2 class="place__title">Title</h2>
          <div class="place__like-container">
            <button class="place__like" title="Лайк!" type="button"></button>
            <div class="place__like-counter">0</div>
          </div>
        </div>
      </article>
    </li>
  </template>
  </>
  );
}

export default App;
