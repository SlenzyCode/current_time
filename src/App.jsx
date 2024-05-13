import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App