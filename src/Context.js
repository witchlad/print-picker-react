import React, {useState, useEffect} from "react"

const Context = React.createContext()

const ContextProvider = ({children}) => {
    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    
    const api = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    
    useEffect( () => {
        fetch(api)
            .then(response => response.json())
            .then(data => setPhotos(data))
    },[])

    const addToCart = (newItem) => {
        setCartItems(prevItems => [...prevItems, newItem])
    }

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    const emptyCart = () =>{
        setCartItems([])
    }

    const toggleFavorite = (id) => {
        const updatedArr = photos.map(photo => {
            if (photo.id === id){
                console.log(id)
                console.log(!photo.isFavorite)
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }

            } 
            return photo
        }) 
        setPhotos(updatedArr)
    }

    return (
        <Context.Provider value ={{photos, toggleFavorite, addToCart, cartItems, removeFromCart, emptyCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}