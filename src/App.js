import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import { Home, AboutPage, Gallery, Works, Contact, NotFound } from "./pages/index";


function App() {
  return (
   <BrowserRouter>
   <Navbar />
    <Routes>
      <Route index path = "/" element = {<Home />}/>
      <Route path = "about" element = {<AboutPage />}/>
      <Route path = "works" element = {<Works />}/>
      <Route path = "gallery" element = {<Gallery />}/>
      <Route path = "contact" element = {<Contact />}/>
      <Route path = "*" element = {<NotFound />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
