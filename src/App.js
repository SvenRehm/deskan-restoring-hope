import Navigation from "./Navigation/Navigation"

import Footer from "./Footer/Footer"
import Home from "./Routes/Home/Home"
import Contact from "./Contact/Contact"
import Blog1 from "./Blog1/Blog1"
import Donate from "./Donate/Donate"
import { Routes, Route } from "react-router-dom"
import BoardMembers from "./Board Members/BoardMembers"
import Reports from "./Reports/Reports"
import Gallery from "./Gallery/Gallery"
function App() {
   return (
      <div className="App">
         <>
            <Navigation />

            <Routes>
               <Route path="/board-members" element={<BoardMembers />} />
               <Route path="/reports" element={<Reports />} />
               <Route path="/photogallery" element={<Gallery />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/" element={<Home />} />

               <Route path="/donate" element={<Donate />} />
               <Route path="/:blogId" element={<Blog1 />} />
            </Routes>
            <Footer />
         </>
      </div>
   )
}

export default App
