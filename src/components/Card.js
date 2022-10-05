function Card ({cardItem}) {
    return (
        <article className="element">
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
    )

}

export default Card 