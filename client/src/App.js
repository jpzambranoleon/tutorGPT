import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Chat from "./pages/chat/Chat";

const mdTheme = createTheme();
// main function to write on
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </Router>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
