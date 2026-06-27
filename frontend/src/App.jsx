import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CustomerInquiry from "./pages/CustomerInquiry";
import CookRegistration from "./pages/CookRegistration";
import AllCooks from "./pages/AllCooks";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customer-inquiry" element={<CustomerInquiry />}/>
      <Route path="/cook-registration" element={<CookRegistration />} />
      <Route path="/all-cooks" element={<AllCooks/>} />
    </Routes>
  );
};

export default App;