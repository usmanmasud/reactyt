// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Homepage from "./components/pages/HomePage"
// import Dashborad from "./components/pages/Dashboard"
// import NotFound from "./components/pages/Notfount"
// import Nav from "./components/pages/Nav"
// import Profile from "./components/pages/Profile"
// import Settings from "./components/pages/Ssettings"
// import Products from "./components/pages/Products"

import { createContext } from "react"
import Check from "./components/Check"

export default function App() {
  const userContext = createContext()

  return (
    <div>
      <userContext.Provider value="guest" >
        <Check />
      </userContext.Provider>


      {/* <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/dashboard" element={<Dashborad />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  )
}