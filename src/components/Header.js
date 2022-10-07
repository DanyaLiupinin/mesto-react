import logo from '../images/header__logo.svg'

function Header() {
    return (
        <header className="header">
            <a href="/" className="header__logo" style={{ backgroundImage: `url(${logo})` }}></a>
        </header>
    )
}

export default Header