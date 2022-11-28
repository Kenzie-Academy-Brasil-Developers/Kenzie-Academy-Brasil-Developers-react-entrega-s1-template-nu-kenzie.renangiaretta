import logo from './../../../img/logo.png'
import './index.css'


const Header = ({ setLogin }) => {
    return (
        <div className='header-container'>
                <header className='header'>
                    <img src={logo} alt="logo" />
                    <button onClick={() => setLogin (!false)} >Inicio</button>
                </header>
        </div>
    )
}
export default Header