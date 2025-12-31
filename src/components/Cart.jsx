import { useContext } from 'react';

import Modal from './UI/Modal.jsx';
import CartContext from '../store/CartContext.jsx';
import Button from './UI/Button.jsx';
import { currencyFormatter } from '../util/currency_formatter.js';
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Cart() {
    const cartContext = useContext(CartContext);
    const userProgressContext = useContext(UserProgressContext);

    const cartTotal = cartContext.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    const handleCloseModal = () => {
        userProgressContext.hideCart();
    }

    console.log("rendering CART")
    return (
        <Modal className="cart" open={userProgressContext.progress === "cart"}>
            <h2>Your Cart</h2>
            <ul>
                {cartContext.items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseModal}>
                    Close
                </Button>
                <Button onClick={handleCloseModal}>Go to Checkout</Button>
            </p>
        </Modal>
    );
}