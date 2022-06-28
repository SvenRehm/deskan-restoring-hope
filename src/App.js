import "./App.css"
import Navigation from "./Navigation/Navigation"

import Footer from "./Footer/Footer"
import Home from "./Routes/Home/Home"
import About from "./Routes/About/About"
import Blog1 from "./Blog1/Blog1"
import Donate from "./Donate/Donate"
import { Routes, Route } from "react-router-dom"

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
               <Route path="/deskan-restoring-hope/about" element={<About />} />
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
