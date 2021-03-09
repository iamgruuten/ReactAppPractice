import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
   
    return (
        <button 
            onClick={onClick} 
            className='btn' 
            style={{backgroundColor:color}}>
                {text}
        </button>
    )
}


Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button
