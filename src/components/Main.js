import React from 'react'
import api from '../utils/Api'

function Main (props) {

   const [ userName, setUserName ] = React.useState('')
   const [ userDescription, setUserDescription ] = React.useState()
   const [ userAvatar, setuserAvatar ] = React.useState()

   React.useEffect(() => {
      api.getUserInfo()
      .then((data) => {
         setUserName(data.name)
         setUserDescription(data.about)
         setuserAvatar(data.avatar)
      })
   }, [])

   const [ cards, setCards ] = React.useState([])

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
            cards.map((cardItem) => (
               <article className="element" key={cardItem._id}>
                  <button type="button" className="element__delete" aria-label="delete-photo"></button>
                  <img className="element__photo" src={cardItem.link} alt="" />
                  <div className="element__info">
                     <h2 className="element__title">{cardItem.name}</h2>
                     <div className="element__like-container">
                        <button type="button" className="element__like-button" aria-label="like-photo"></button>
                        <div className="element__like-amount">{cardItem.likes.length}</div>
                     </div>
                  </div>
               </article>
              ))
            }
         </section>  
      </main>
    )
}

export default Main
