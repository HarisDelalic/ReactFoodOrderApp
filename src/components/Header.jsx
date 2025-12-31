import RestaurantLogo from '../assets/logo.jpg'
import Button from "./UI/Button.jsx";
import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
export default function Header() {
    const cartContext = useContext(CartContext)
    const userProgressContext = useContext(UserProgressContext)

    const totalNumberOfMealItemsInCart = cartContext.items.reduce((total, item) => {
        return total + item.quantity;
    }, 0)

    const handleOpenCart = () => {
        console.log("setting progress to CART")
        return userProgressContext.showCart();
    }

    return <header id="main-header">
        <div id="title">
            <img src={RestaurantLogo} alt="Restaurant Logo" />
            <h1> Food Ordering App </h1>
        </div>
        <Button textOnly onClick={handleOpenCart}>Cart ({totalNumberOfMealItemsInCart})</Button>
    </header>
}