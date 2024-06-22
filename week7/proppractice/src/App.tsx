import { useState } from "react";
import "./App.css";
import { Counter } from "./Counter";

function App() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <>
            <h2>Counter Application</h2>
            <Counter
                count={count}
                increment={increment}
                decrement={decrement}
            />
        </>
    );
}

export default App;
