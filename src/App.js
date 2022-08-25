import Navigation from "./Components/Navigation/Navigation"
import { AnimatePresence } from "framer-motion"
import Footer from "./Components/Footer/Footer"
import Home from "./Routes/Home/Home"
import Contact from "./Components/Contact/Contact"
import Blog1 from "./Components/Blog1/Blog1"
import Donate from "./Components/Donate/Donate"
import { Routes, Route, useLocation } from "react-router-dom"
import BoardMembers from "./Components/Board Members/BoardMembers"
import Reports from "./Components/Reports/Reports"
import Gallery from "./Components/Gallery/Gallery"
import TermsOfService from "./Components/PrivacyPolicy/TermsOfService"
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy"

function App() {
   const location = useLocation()
   return (
      <div className="App">
         <>
            <Navigation />
            <AnimatePresence exitBeforeEnter>
               <Routes key={location.pathname} location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/board-members" element={<BoardMembers />} />
                  <Route path="/reports" element={<Reports />} />
               
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/donate" element={<Donate />} />
                  <Route path="/:blogId" element={<Blog1 />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route
                     path="/terms-of-service"
                     element={<TermsOfService />}
                  />
               </Routes>
            </AnimatePresence>
            <Footer />
         </>
      </div>
   )
}

export default App
