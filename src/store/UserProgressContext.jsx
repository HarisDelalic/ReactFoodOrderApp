import _default from "eslint-plugin-react-refresh";
import {createContext, useState} from "react";

const UserProgressContext = createContext({
    progress: "",
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {}
});

export function UserProgressContextProvider({children}) {
    const[userProgress, setUserProgress] = useState("");

    function showCart() {
        return setUserProgress("cart");
    }

    function hideCart() {
        return setUserProgress("");
    }

    function showCheckout() {
        return setUserProgress("checkout");
    }

    function hideCheckout() {
        return setUserProgress("");
    }

    const userProgressContext = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    };

    return (
        <UserProgressContext.Provider value={userProgressContext}>
            {children}
        </UserProgressContext.Provider>
    );}

export default UserProgressContext;