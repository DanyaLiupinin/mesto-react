import React from "react"
import PopupWithForm from "./PopupWithForm"

function EditAvatarPopup (props) {

    const avatarRef = React.useRef()
    const [avatar, setAvatar] = React.useState('')

    function handleChange () {
        setAvatar(avatarRef.current.value)
    }

    function handleSubmit (e) {
        e.preventDefault()
        props.onUpdateAvatar({
            avatar: avatar
        })
        props.onClose()
        setAvatar('')
    }

    return (
        <PopupWithForm
               name='avatar'
               title='Обновить аватар?'
               isOpen={props.isOpen}
               onClose={props.onClose}
               onSubmit={handleSubmit}
               children={
                  <>
                     <div>
                        <input className="popup__input popup__input_content_avatar" id="avatar" name="avatar" type="url" placeholder="Ссылка на аватар" value={avatar} required ref={avatarRef} onChange={handleChange} />
                        <span className="popup__input-error" id="error-avatar">Введите адрес картинки</span>
                     </div>
                  </>
               }
               button='Сохранить'
            />
    )
}

export default EditAvatarPopup