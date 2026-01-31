import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { WiCySHome } from './components/pages/WiCySHome';
import { WiCySAbout } from './components/pages/WiCySAbout';
import { WiCySPrograms } from './components/pages/WiCySPrograms';
import { WiCySEvents } from './components/pages/WiCySEvents';
import { WiCySCommunity } from './components/pages/WiCySCommunity';
import { WiCySContact } from './components/pages/WiCySContact';
import { Admin } from './components/pages/Admin';
import { ChatBot } from './components/ChatBot';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<WiCySHome />} />
            <Route path="/about" element={<WiCySAbout />} />
            <Route path="/programs" element={<WiCySPrograms />} />
            <Route path="/events" element={<WiCySEvents />} />
            <Route path="/community" element={<WiCySCommunity />} />
            <Route path="/contact" element={<WiCySContact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}