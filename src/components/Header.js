import React, {useContext} from "react"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus} from '@fortawesome/free-solid-svg-icons'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { Context} from "../Context"


function Header() {
    const {cartItems} = useContext(Context)

    const headerIcon = () => {
        if(cartItems.length > 0){
            return <Link to ="../pages/Cart" ><FontAwesomeIcon icon={faCartPlus} /></Link>
        } else {
            return <Link to ="../pages/Cart" ><FontAwesomeIcon icon={faShoppingCart} /></Link>
        }}
    
        return (
        <header>
            <Link to ="/" ><FontAwesomeIcon icon={faSearch} /></Link>
            <h2>PrintPicker</h2>
            {headerIcon()}
        </header>
    )
}

export default Header
