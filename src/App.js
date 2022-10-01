
import './App.css';

function App() {
  return (
    <div className="page__container">
      <header className="header">
         <a href="/" className="header__logo"></a>
      </header>
      <main className="content">
         <section className="profile">
            <div className="profile__avatar-section">
               <img className="profile__avatar" src="#" alt="Аватар" />
            </div>
            <div className="profile__info">
               <div className="profile__name">
                  <h1 className="profile__title"></h1>
                  <button type="button" className="profile__edit-button" aria-label="edit-profile"></button>
               </div>
               <p className="profile__description"></p>
            </div>
            <button type="button" className="profile__add-button" aria-label="add-photo"></button>
         </section>
    
         <section className="elements">
         </section>
      </main>
      <footer className="footer">
         <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
      </footer>

      <div className="popup popup_type_edit">
         <div className="popup__content popup__content_type_edit">
            <button type="button" className="popup__close-button popup__close-button_type_edit" aria-label="close-popup"></button>
            <h2 className="popup__title popup__title_type_edit">Редактировать профиль</h2>
            <form className="popup__form popup__form_type_edit" name="edit-profile" action="#" method="post" novalidate>
               <div className="popup__input-field">
                  <input className="popup__input popup__input_content_name" id="name" name="name" type="text" value="Том Йорк" required minlength="2" maxlength="40" placeholder="Имя" />
                  <span className="popup__input-error" id="error-name"></span>
               </div>
               <div className="popup__input-field">
                  <input className="popup__input popup__input_content_description" id="description" name="about" type="text" value="Моя муза" required minlength="2" maxlength="200" placeholder="Вид деятельности" />
                  <span classNameName="popup__input-error" id="error-description"></span>
               </div>
               <button type="submit" classNameName="popup__submit-button" disabled>Сохранить</button>
            </form>
         </div>
      </div>   

      <div classNameName="popup popup_type_add">
         <div classNameName="popup__content popup__content_type_add">
            <button type="button" classNameName="popup__close-button popup__close-button_type_add" aria-label="close-popup"></button>
            <h2 className="popup__title popup__title_type_add">Новое место</h2>
            <form className="popup__form popup__form_type_add" name="edit-profile" action="#" method="post" novalidate>
               <div className="popup__input-field">
                  <input className="popup__input popup__input_content_place" id="place" name="name" type="text" placeholder="Название" value="" required minlength="2" maxlength="30" />
                  <span className="popup__input-error" id="error-place">Вы пропустили это поле</span>
               </div>
               <div className="popup__input-field">
                  <input className="popup__input popup__input_content_link" id="link" name="link" type="url" placeholder="Ссылка на картинку" value="" required />
                  <span className="popup__input-error" id="error-link">Введите адрес сайта</span>
               </div> 
               <button type="submit" className="popup__submit-button" disabled>Создать</button>
            </form>
         </div>
      </div>
      <div className="popup popup_type_photo">
         <div className="popup__content popup__content_type_photo">
            <img className="popup__photo" src="#" alt="" />
            <button type="button" className="popup__close-button popup__close-button_type_photo" aria-label="close-popup"></button>
            <p className="popup__description"></p>
         </div>
      </div>
      <template id="card-template">
         <article className="element">
            <button type="button" className="element__delete" aria-label="delete-photo"></button>
            <img className="element__photo" src="#" alt="" />
            <div className="element__info">
               <h2 className="element__title"></h2>
               <div className="element__like-container">
                  <button type="button" className="element__like-button" aria-label="like-photo"></button>
                  <div className="element__like-amount"></div>
               </div>
            </div>
         </article>
      </template>

      <div className="popup popup_type_delete">
         <div className="popup__content popup__content_type_delete">
            <form className="popup__form popup__form_type_delete">
               <button type="button" className="popup__close-button popup__close-button_type_delete" aria-label="close-popup"></button>
               <h2 className="popup__title popup__title_type_delete">Вы уверены?</h2>
               <button type="submit" className="popup__submit-button popup__submit-button_active popup__submit-button_type_delete">Да</button>
            </form>
         </div>
      </div>
      <div className="popup popup_type_avatar">
         <div className="popup__content popup__content_type_avatar">
            <button type="button" className="popup__close-button popup__close-button_type_avatar" aria-label="close-popup"></button>
            <h2 className="popup__title popup__title_type_avatar">Обновить аватар?</h2>
            <form className="popup__form popup__form_type_avatar" name="edit-avatar" action="#" method="post" novalidate>
               <div>
                  <input className="popup__input popup__input_content_avatar" id="avatar" name="avatar" type="url" placeholder="Ссылка на аватар" value="" required />
                  <span className="popup__input-error" id="error-avatar">Введите адрес картинки</span>
               </div>
               <button type="submit" className="popup__submit-button" disabled>Сохранить</button>
            </form>
         </div>
      </div>

   </div>
  );
}

export default App;
