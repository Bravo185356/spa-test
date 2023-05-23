import { ThemeProvider } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
