import propTypes from 'prop-types'

function Button(props){
    const {name} = props
    return(
        <button>{name}</button>
    )

}

// Button.defaultProps= {
//     name:"default"
// }

Button.propTypes = {
    name: propTypes.string.isRequired
}

export default Button