import { act, useReducer, useState } from "react"

function Counter() {
    const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, 0)
    function reducer(state, action) {
        if (action.type == "increment") {
            return state + action.playload
        } else if (action.type == "decrement") {
            return state - action.playload
        }
    }
    return <div>
        Use state:
        {count} <br></br>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button><br></br>
        <hr></hr>
        Use reducer:
        {state}<br></br>
        <button onClick={() => dispatch({ type: "increment", playload: 1 })}>Increment</button>
        <button onClick={() => dispatch({ type: "decrement", playload: 1 })}>Decrement</button>
    </div>

}

export default Counter