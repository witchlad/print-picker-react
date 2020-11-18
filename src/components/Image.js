import React, {useState, useContext} from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faDollarSign} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Context } from "../Context"

const Image = ({img}) => {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)

    const heart = () => {
        if (img.isFavorite){
            return <FontAwesomeIcon icon={faHeart} onClick={() => toggleFavorite(img.id)} />
        } else if(hovered) {
            return <FontAwesomeIcon icon={farHeart} onClick={() => toggleFavorite(img.id)}/>
        }
    }
    
    const plus = () => {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart){
            return <FontAwesomeIcon icon={faDollarSign} onClick = {() => removeFromCart(img.id)} />
        } else if (hovered){
            return <FontAwesomeIcon icon={faPlus} onClick = {() => addToCart(img)} />
        }
    } 
    
    return (
    <div 
        className = "image-container" 
        onMouseEnter ={ () => setHovered(true)}
        onMouseLeave ={ () => setHovered(false)}>
        
        <img src ={img.url} className="image-grid"/>
        {heart()}
        {plus()}
    </div>
    )
}

Image.propTypes = {
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image