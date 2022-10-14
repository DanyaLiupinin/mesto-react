import React from "react"
import PopupWithForm from "./PopupWithForm"
import { CurrentUserContext } from "../context/CurrentUserContext"

function EditProfilePopup(props) {

    const currentUser = React.useContext(CurrentUserContext)

    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')

    React.useEffect(() => {
        setName(currentUser.name)
        setDescription(currentUser.about)
    }, [currentUser])

    function handleNameChange (e) {
        setName(e.target.value)
    }

    function handleDescriptionChange (e) {
        setDescription(e.target.value)
    }

    function handleSubmit (e) {

        e.preventDefault()

        props.onUpdateUser({name, about: description})

        props.onClose()

    }

    return (
        <PopupWithForm
            name='edit'
            title='Редактировать профиль'
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            children={
                <>
                    <div className="popup__input-field">
                        <input className="popup__input popup__input_content_name" id="name" name="name" type="text" value={name} required minLength="2" maxLength="40" placeholder="Имя" onChange={handleNameChange} />
                        <span className="popup__input-error" id="error-name"></span>
                    </div>
                    <div className="popup__input-field">
                        <input className="popup__input popup__input_content_description" id="description" name="about" type="text" value={description} required minLength="2" maxLength="200" placeholder="Вид деятельности" onChange={handleDescriptionChange}/>
                        <span className="popup__input-error" id="error-description"></span>
                    </div>
                </>
            }
            button='Сохранить'
        />
    )
}


export default EditProfilePopup




