import React from "react";

import { Home } from "./components/Home";
import { Create } from "./components/Create";

import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";

const App = () => {
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;