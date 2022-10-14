import React from 'react'
import { CurrentUserContext } from '../context/CurrentUserContext'
import api from '../utils/Api'
import Card from './Card'

function Main(props) {

   const currentUser = React.useContext(CurrentUserContext)

   const [cards, setCards] = React.useState([])

   React.useEffect(() => {
      api.getInitialCards()
         .then(cards => {
            setCards(cards)
         })

   }, [])

   // лайк на карточку

   function handleCardLike(card) {

      const isLiked = card.likes.some(like => like._id === currentUser._id)

      if (!isLiked) {

         // отправляем запрос на постановку лайка
      // далее в стэйт отправляем функцию колбэк
      // функция колбэк принимает старое значение (массив карточек) как параметр
      // пробегаем по старому массива и сравнвиаем id всех карточек с id карточки из запроса на лайк
      // если карточка не та, возвращаем её
      // если карточка та, создаём новую, уже с лайком

      api.putLike(card._id)
      .then((newCard) => {
         setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });

      } else {

         api.deleteLike(card._id)
         .then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
         })

      }
   }

   return (
      <main className="content">
         <section className="profile">
            <div className="profile__avatar-section" onClick={props.onEditAvatar}>
               <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
            </div>
            <div className="profile__info">
               <div className="profile__name">
                  <h1 className="profile__title">{currentUser.name}</h1>
                  <button type="button" className="profile__edit-button" aria-label="edit-profile" onClick={props.onEditProfile}></button>
               </div>
               <p className="profile__description">{currentUser.about}</p>
            </div>
            <button type="button" className="profile__add-button" aria-label="add-photo" onClick={props.onAddPlace}></button>
         </section>
         <section className="elements">
            { 
               cards.map((card) => {
                  return <Card
                     key={card._id}
                     cardItem={card}
                     onCardClick={props.onCardClick}
                     onCardLike={handleCardLike}
                  />
               })
            }
         </section>
      </main>
   )
}

export default Main
