import RestaurantLogo from '../assets/logo.jpg'
export default function Header() {
    return <header id="main-header">
        <div id="title">
            <img src={RestaurantLogo} alt="Restaurant Logo" />
            <h1> Food Ordering App </h1>
        </div>
        <button>Cart (0)</button>
    </header>
}