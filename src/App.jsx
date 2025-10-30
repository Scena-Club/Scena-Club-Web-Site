import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "./pages/Home";
import { Library } from "./pages/Library";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/Navbar";

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // e.g., "home"
      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          requestAnimationFrame(scrollToElement); // Recheck on next frame
        }
      };
      scrollToElement();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top for non-hash routes
    }
  }, [location]); // Trigger on every location change

  return null;
}

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Navbar />
        <ScrollHandler />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Library" element={<Library />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
