import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./components/pages/HomePage"
import Dashborad from "./components/pages/Dashboard"
import NotFound from "./components/pages/Notfount"
import Nav from "./components/pages/Nav"
import Profile from "./components/pages/Profile"
import Settings from "./components/pages/Ssettings"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashborad />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}