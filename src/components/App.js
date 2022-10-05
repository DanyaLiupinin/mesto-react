

import '../index.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer';
import React from 'react';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup'

function App() {


   // попапы

   const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
   const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
   const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
   const [selectedCard, setSelectedCard] = React.useState(false)

   function handleEditAvatarClick () {
      setEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick () {
      setEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick () {
      setAddPlacePopupOpen(true)
  }

  function closeAllPopups () {
   setEditAvatarPopupOpen(false)
   setEditProfilePopupOpen(false)
   setAddPlacePopupOpen(false)
   setSelectedCard(false)
  }

  function handleCardClick(card) {
   setSelectedCard(card)
  }


  return (
   <div className="page">
   <Header />
   <Main 
   onEditProfile={handleEditProfileClick}
   onAddPlace={handleAddPlaceClick}
   onEditAvatar={handleEditAvatarClick} 
   onCardClick={handleCardClick}
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

   <ImagePopup
   card={selectedCard}
   onClose={closeAllPopups}
   />
      


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
