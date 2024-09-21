import { useState, useReducer } from "react";

export default function Counter2() {
    const [state, dispatch] = useReducer(reducer, { count: 1 })
    function reducer(state, action) {
        if (action.type == "increment") {
            return state + action.playload
        } else if (action.type == "decrement") {
            return state - action.playload
        }
    }


    return (
        <div>
            Use reducer:
            {state}<br></br>
            <button onClick={() => dispatch({ type: "increment", playload: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement", playload: 1 })}>Decrement</button>
        </div>
    )
}