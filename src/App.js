import React from "react";

import { Home } from "./components/Home";
import { Create } from "./components/Create";
import { Edit } from "./components/Edit";

import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";


const App = () => {
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;