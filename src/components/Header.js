import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, colorIndicator, showAdd}) => {
    const currLocation = useLocation()

    return (
        <header className='header'>
            <h1>Welcome to {title}</h1>

            {currLocation.pathname === "/" && 
            <Button 
                color={colorIndicator} 
                text={showAdd ? "Add" : "Close"} 
                onClick={onAdd}
            />
            }
        </header>
    )
}

function setToggleColor(onAdd){
    console.log("Setting color")
}

Header.defaultProps = {
    title : 'Task Tracker',
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}

//You can also add CSS in JS
const headingStyle = {
    color: 'red', 
    backgroundColor: 'black',
    textAlign: 'center',
}

export default Header
