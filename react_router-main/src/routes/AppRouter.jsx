// src/routes/AppRouter.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import ContactUs from "../pages/Contact Us"; // Import ContactUs component
import NotFound from "../pages/NotFound";
import Services from "../pages/Services";
import Service1 from "../pages/Service1";
import Service2 from "../pages/Service2";
import Service3 from "../pages/Service3";
import ServicesOverview from "../pages/ServicesOverview";

const AppRouter = () => {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} /> {/* Add Contact Us route */}
            <Route path="/services" element={<Services />}>
              <Route index element={<ServicesOverview />} />
              <Route path="service1" element={<Service1 />} />
              <Route path="service2" element={<Service2 />} />
              <Route path="service3" element={<Service3 />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
};

export default AppRouter;
