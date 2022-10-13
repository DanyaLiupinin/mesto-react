import React from "react"

import { CurrentUserContext } from "../context/CurrentUserContext"

function Card({ cardItem, onCardClick }) {

    // подписка на котекст
    const currentUser = React.useContext(CurrentUserContext)

    // проверяем, наша ли карточка
    const isOwn = cardItem.owner._id === currentUser._id

    console.log(isOwn)

    function handleClick() {
        onCardClick(cardItem)
    }

    return (
        <article className="element">
            { !isOwn ? <button type="button" className="element__delete" aria-label="delete-photo" /> : ''}
            <img className="element__photo" src={cardItem.link} alt={cardItem.name} onClick={handleClick} />
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