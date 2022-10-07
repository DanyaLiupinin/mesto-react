import React from 'react'
import api from '../utils/Api'
import Card from './Card'

function Main(props) {

   const [userName, setUserName] = React.useState('')
   const [userDescription, setUserDescription] = React.useState('')
   const [userAvatar, setuserAvatar] = React.useState('')
   const [cards, setCards] = React.useState([])

   React.useEffect(() => {

      api.getUserInfo()
         .then((data) => {
            setUserName(data.name)
            setUserDescription(data.about)
            setuserAvatar(data.avatar)
         })

      api.getInitialCards()
         .then(cards => {
            setCards(cards)
         })
         
   }, [])


   return (
      <main className="content">
         <section className="profile">
            <div className="profile__avatar-section" onClick={props.onEditAvatar}>
               <img className="profile__avatar" src={userAvatar} alt="Аватар" />
            </div>
            <div className="profile__info">
               <div className="profile__name">
                  <h1 className="profile__title">{userName}</h1>
                  <button type="button" className="profile__edit-button" aria-label="edit-profile" onClick={props.onEditProfile}></button>
               </div>
               <p className="profile__description">{userDescription}</p>
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
