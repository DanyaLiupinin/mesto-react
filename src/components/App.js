

import '../index.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer';
import React from 'react';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup'
import api from '../utils/Api';
import { CurrentUserContext } from '../context/CurrentUserContext';

function App() {


   // попапы

   const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
   const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
   const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
   const [selectedCard, setSelectedCard] = React.useState({})
   const [currentUser, setCurrentUser] = React.useState({})

   React.useEffect(() => {
      api.getUserInfo()
         .then((data) => {
            setCurrentUser(data)
         })
   }, [])

   function handleEditAvatarClick() {
      setEditAvatarPopupOpen(true)
   }

   function handleEditProfileClick() {
      setEditProfilePopupOpen(true)
   }

   function handleAddPlaceClick() {
      setAddPlacePopupOpen(true)
   }

   function closeAllPopups() {
      setEditAvatarPopupOpen(false)
      setEditProfilePopupOpen(false)
      setAddPlacePopupOpen(false)
      setSelectedCard({})
   }

   function handleCardClick(card) {
      setSelectedCard(card)
   }


   return (

      <div className="page__container">
         <CurrentUserContext.Provider value={currentUser}>
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
                  </>
               }
               button='Сохранить'
            />

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
                  </>
               }
               button='Сохранить'
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
                  </>
               }
               button='Создать'
            />

            <ImagePopup
               card={selectedCard}
               onClose={closeAllPopups}
            />
         </CurrentUserContext.Provider>
      </div>



   );
}

export default App;
