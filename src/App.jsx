import { Navbar, Home, Footer, Skill, Projects } from "./components"
import { Outlet, Route, Routes } from "react-router-dom"

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Outlet />;
}

const App = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <div className="mt-32">
        <Routes>
          <Route element={<ScrollToTop />}>
            <Route path="/" element={<Home />} />
            <Route path="/technology" element={<Skill />} />
            <Route path="/project" element={<Projects />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App