import RestaurantLogo from '../assets/logo.jpg'
import Button from "./UI/Button.jsx";
import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";
export default function Header() {
    const cartContext = useContext(CartContext)

    const totalNumberOfMealItemsInCart = cartContext.items.reduce((total, item) => {
        return total + item.quantity;
    }, 0)
    return <header id="main-header">
        <div id="title">
            <img src={RestaurantLogo} alt="Restaurant Logo" />
            <h1> Food Ordering App </h1>
        </div>
        <Button textOnly>Cart ({totalNumberOfMealItemsInCart})</Button>
    </header>
}