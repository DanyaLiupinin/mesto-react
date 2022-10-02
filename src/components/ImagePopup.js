function ImagePopup () {
    return (
        <div className="popup popup_type_photo">
         <div className="popup__content popup__content_type_photo">
            <img className="popup__photo" src="#" alt="" />
            <button type="button" className="popup__close-button popup__close-button_type_photo" aria-label="close-popup"></button>
            <p className="popup__description"></p>
         </div>
      </div>
    )
}