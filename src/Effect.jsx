import { useState } from "react";

function Effect(){
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
        document.title = `Count: ${count + 1}`;
    };

    return(
        <div>
            <h1>useEffect Hook</h1>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
}

export default Effect;