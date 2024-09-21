import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

export default function Homepage() {
    const [username, setUsername] = useState('')
    const navigate = useNavigate();

    function handleClick() {
        navigate("/dashboard/profile", { state: { username } })
    }
    return <div>This is a homepage
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        <button onClick={handleClick}>Go to Profile</button>
    </div>
}