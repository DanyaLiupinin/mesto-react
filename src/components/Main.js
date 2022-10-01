function Main () {

    function handleEditAvatarClick () {
        document.querySelector('.popup_type_avatar').classList.add('popup_opened')
    }

    function handleEditProfileClick () {
        document.querySelector('.popup_type_edit').classList.add('popup_opened')
    }

    function handleAddPlaceClick () {
        document.querySelector('.popup_type_add').classList.add('popup_opened')
    }

    return (
        <main className="content">
         <section className="profile">
            <div className="profile__avatar-section" onClick={handleEditAvatarClick}>
               <img className="profile__avatar" src="#" alt="Аватар" />
            </div>
            <div className="profile__info">
               <div className="profile__name">
                  <h1 className="profile__title">Том Йорк</h1>
                  <button type="button" className="profile__edit-button" aria-label="edit-profile" onClick={handleEditProfileClick}></button>
               </div>
               <p className="profile__description">Моя муза</p>
            </div>
            <button type="button" className="profile__add-button" aria-label="add-photo" onClick={handleAddPlaceClick}></button>
         </section>
    
         <section className="elements">
         </section>
      </main>
    )
}

export default Main