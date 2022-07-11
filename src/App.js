import "./App.css"
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
               {/* <Route
                  path="*"
                  element={
                     <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                     </main>
                  }
               /> */}
               <Route
                  path="/deskan-restoring-hope/board-members"
                  element={<BoardMembers />}
               />

               <Route
                  path="/deskan-restoring-hope/reports"
                  element={<Reports />}
               />
               <Route
                  path="/deskan-restoring-hope/photogallery"
                  element={<Gallery />}
               />
               <Route
                  path="/deskan-restoring-hope/about"
                  element={<Contact />}
               />
               <Route path="/deskan-restoring-hope/" element={<Home />} />

               <Route
                  path="/deskan-restoring-hope/donate"
                  element={<Donate />}
               />
               <Route
                  path="/deskan-restoring-hope/:blogId"
                  element={<Blog1 />}
               />
            </Routes>
            <Footer />
         </>
      </div>
   )
}

export default App
