import RestaurantLogo from '../assets/logo.jpg'
import Button from "./UI/Button.jsx";
export default function Header() {
    return <header id="main-header">
        <div id="title">
            <img src={RestaurantLogo} alt="Restaurant Logo" />
            <h1> Food Ordering App </h1>
        </div>
        <Button textOnly>Cart (0)</Button>
    </header>
}