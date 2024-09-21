import { act, useReducer, useState } from "react"

export default function Bank() {
    function reducer(state, action) {
        if (action.type == "add") {
            return { ...state, balace: state.balace + action.palyload }
        }
        if (action.type == "sub") {
            return { ...state, balace: state.balace - action.palyload }
        }
    }
    const [state, dispatch] = useReducer(reducer, { balace: 0 });
    const [amount, setAmount] = useState(0)

    return (
        <div>
            {state.balace}
            <input type="text" id="" value={amount} onChange={e => setAmount(e.target.value)} />
            <button onClick={() => dispatch({ type: "add", palyload: Number(amount) })}>Deposit</button>
            <button onClick={() => dispatch({ type: "sub", palyload: Number(amount) })}>Withdraw</button>
        </div>
    )
}