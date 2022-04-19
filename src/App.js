import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:category" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
