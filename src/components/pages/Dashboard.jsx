import { Link, Outlet } from "react-router-dom";

export default function Dashborad() {
    return (
        <div>
            <ul>
                <li><Link to="profile" >Profile</Link></li>
                <li><Link to="settings" >Settings</Link></li>
            </ul>
            This is a dashboard
            <Outlet />
        </div>
    );
}