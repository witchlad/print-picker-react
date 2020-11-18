import React, {useState, useContext} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")
    const {cartItems, emptyCart} = useContext(Context)

    const cartItemElem = cartItems.map(item => {
        return <CartItem key={item.id} item={item}/>
    })

    const changeBtnText = () =>{
        setButtonText( "Ordering...")
        setTimeout(() => {
            console.log("Order placed")
            setButtonText("Place Order")
            emptyCart()
        },3000)
        
    }

    const totalCost = cartItems.length * 5.99

    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElem}
            <p className="total-cost">Total: {totalCost} </p>
            {
                 cartItems.length > 0 ?
                <div className="order-button">
                    <button onClick={changeBtnText}> {buttonText}</button>
                </div> : <p className = "cart-text"> You have no items in your cart</p>}
        </main>
    )
}

export default Cart