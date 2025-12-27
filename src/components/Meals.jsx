import {useEffect, useState} from "react";

export default function Meals() {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        async function fetchMeals() {
            console.log("in fetchMeals")
            const response = await fetch("http://localhost:3000/meals"); // BASE_URL should be extracted. There could be multiple environments ...

            if(!response.ok) {
                // TODO: handle error response gracefully
            }

            const meals = await response.json();
            setMeals(meals)
        }

        fetchMeals();
    }, [])

    return <ul id="meals">
        {meals.map(meal => <li key={meal.id}>{meal.name}</li>)}
    </ul>


}