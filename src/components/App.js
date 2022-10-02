

import '../index.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer';
import React from 'react';
import PopupWithForm from './PopupWithForm';

function App() {

   const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)

   function handleEditAvatarClick () {
      setEditAvatarPopupOpen(true)
  }

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)

  function handleEditProfileClick () {
      setEditProfilePopupOpen(true)
  }

  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)

  function handleAddPlaceClick () {
      setAddPlacePopupOpen(true)
  }

  function closeAllPopups () {
   setEditAvatarPopupOpen(false)
   setEditProfilePopupOpen(false)
   setAddPlacePopupOpen(false)
  }



  return (
   <div className="page__container">
   <Header />
   <Main 
   onEditProfile={handleEditProfileClick}
   onAddPlace={handleAddPlaceClick}
   onEditAvatar={handleEditAvatarClick} 
   />
   <Footer /> 
   <PopupWithForm 
   name='avatar'
   title='Обновить аватар?'
   isOpen={isEditAvatarPopupOpen} 
   onClose={closeAllPopups}
   children={
      <>
      <div>
         <input className="popup__input popup__input_content_avatar" id="avatar" name="avatar" type="url" placeholder="Ссылка на аватар" value="" required />
         <span className="popup__input-error" id="error-avatar">Введите адрес картинки</span>
      </div>
      <button type="submit" className="popup__submit-button" disabled>Сохранить</button>
      </>
   } />

   <PopupWithForm 
   name='edit'
   title='Редактировать профиль'
   isOpen={isEditProfilePopupOpen} 
   onClose={closeAllPopups}
   children={
      <>
      <div className="popup__input-field">
         <input className="popup__input popup__input_content_name" id="name" name="name" type="text" value="Том Йорк" required minLength="2" maxLength="40" placeholder="Имя" />
         <span className="popup__input-error" id="error-name"></span>
      </div>
      <div className="popup__input-field">
         <input className="popup__input popup__input_content_description" id="description" name="about" type="text" value="Моя муза" required minLength="2" maxLength="200" placeholder="Вид деятельности" />
         <span className="popup__input-error" id="error-description"></span>
      </div>
      <button type="submit" className="popup__submit-button" disabled>Сохранить</button>
      </>
   }
   />

<PopupWithForm 
   name='add'
   title='Новое место'
   isOpen={isAddPlacePopupOpen} 
   onClose={closeAllPopups}
   children={
      <>
      <div className="popup__input-field">
         <input className="popup__input popup__input_content_place" id="place" name="name" type="text" placeholder="Название" value="" required minLength="2" maxLength="30" />
         <span className="popup__input-error" id="error-place">Вы пропустили это поле</span>
      </div>
      <div className="popup__input-field">
         <input className="popup__input popup__input_content_link" id="link" name="link" type="url" placeholder="Ссылка на картинку" value="" required />
         <span className="popup__input-error" id="error-link">Введите адрес сайта</span>
      </div> 
      <button type="submit" className="popup__submit-button" disabled>Создать</button>
      </>
   }
   />


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


   </div>
  );
}

export default App;
