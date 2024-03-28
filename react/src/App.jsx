import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./context/MyThemeContext"; 
import Navbar from "./components/NavBar"; 
import AppRoutes from "./AppRoutes";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      
      <ThemeProvider>
        <div>
          <AppRoutes />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
