import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

import Users from "./user/pages/Users";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="/*" element={<Users />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
