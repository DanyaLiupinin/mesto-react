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
                  return <Card key={card._id} cardItem={card} onCardClick={props.onCardClick} />
               })
            }
         </section>
      </main>
   )
}

export default Main
