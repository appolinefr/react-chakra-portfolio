import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

//import all necessery components/pages
import NavBar from "./components/NavBar";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <NavBar />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        </Routes> */}
      </Router>
    </ChakraProvider>
  );
}

export default App;
