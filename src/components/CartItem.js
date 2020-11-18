import React, {useContext} from "react"
import {Context} from "../Context"

const CartItem = ({item}) =>{
    const {removeFromCart} = useContext(Context)

    return (
        <div className="cart-item">
            <img src={item.url} width="130px" />
            <button className="cart-btn" onClick = {() => removeFromCart(item.id)}> X </button>
            <p>$5.99</p>
        </div>
    )
}

export default CartItem