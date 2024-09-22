import { useContext } from "react"
import { userContext } from "../context/UserContext"
export default function Check() {
    const { user } = useContext(userContext)
    return <div>

        Check {user}</div>
}