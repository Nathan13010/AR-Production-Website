import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SolutionPage from './pages/SolutionPage';
import Pricing from './pages/Pricing';
import Partnership from './pages/Partnership';
import Demo from './pages/Demo';
import NotFound from './pages/NotFound';
import LegalPage from './pages/LegalPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="viewer" element={<SolutionPage kind="viewer" />} />
          <Route path="configurator" element={<SolutionPage kind="configurator" />} />
          <Route path="ar" element={<SolutionPage kind="ar" />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="partnership" element={<Partnership />} />
          <Route path="demo" element={<Demo />} />
          <Route path="legal" element={<LegalPage kind="legal" />} />
          <Route path="privacy" element={<LegalPage kind="privacy" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
