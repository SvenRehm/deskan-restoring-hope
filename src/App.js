import "./App.css"
import Navigation from "./Navigation/Navigation"

import Footer from "./Footer/Footer"
import Home from "./Routes/Home/Home"
import About from "./Routes/About/About"
import { Routes, Route } from "react-router-dom"

function App() {
   return (
      <div className="App">
         <>
            <Navigation />
            <Routes>
               <Route path="/deskan-restoring-hope/" element={<Home />} />
               <Route path="/deskan-restoring-hope/about" element={<About />} />
               <Route
                  path="*"
                  element={
                     <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                     </main>
                  }
               />
            </Routes>
            <Footer />
         </>
      </div>
   )
}

export default App
