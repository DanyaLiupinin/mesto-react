function Main (props) {

    return (
        <main className="content">
         <section className="profile">
            <div className="profile__avatar-section" onClick={props.onEditAvatar}>
               <img className="profile__avatar" src="#" alt="Аватар" />
            </div>
            <div className="profile__info">
               <div className="profile__name">
                  <h1 className="profile__title">Том Йорк</h1>
                  <button type="button" className="profile__edit-button" aria-label="edit-profile" onClick={props.onEditProfile}></button>
               </div>
               <p className="profile__description">Моя муза</p>
            </div>
            <button type="button" className="profile__add-button" aria-label="add-photo" onClick={props.onAddPlace}></button>
         </section>
    
         <section className="elements">
         </section>  
      </main>
    )
}

export default Main