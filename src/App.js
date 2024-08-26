import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import Header from "./Components/Header";
import "./App.scss"; // Make sure to import the styles

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="content-wrapper">
          <AppRoutes />
        </div>
      </Router>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
