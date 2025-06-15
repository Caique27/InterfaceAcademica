import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard"; // new component
import theme from "./assets/themes/theme.js";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/docente/:professor_Id" element={<Dashboard />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
