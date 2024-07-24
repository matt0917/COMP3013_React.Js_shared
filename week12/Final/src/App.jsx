// App.jsx
import { useState } from "react";
import "./App.css";
import FoodList from "./components/FoodList";
import FoodFilter from "./components/FoodFilter";
import { foods } from "./data";

function App() {
    const [foodList, setFoodList] = useState(foods);
    const [searchText, setSearchText] = useState("");

    const onChangeHandle = (enteredString) => {
        setSearchText(enteredString);
        const filteredFoods = foods.filter((food) =>
            food.name.toLowerCase().includes(enteredString.toLowerCase())
        );
        setFoodList(filteredFoods);
    };

    return (
        <div className="app-container">
            <div className="content">
                <h1>JSP Menu</h1>
                <FoodFilter onChange={onChangeHandle} />
                <hr />
                <FoodList foods={foodList} searchText={searchText} />
            </div>
        </div>
    );
}

export default App;
