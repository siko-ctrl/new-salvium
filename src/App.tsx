import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';

// Styles
import './styles/design-system.css';
import './styles/cards.css';
import 'aos/dist/aos.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Tools from './pages/Tools';
import Exchange from './pages/Exchange';
import Staking from './pages/Staking';
import Bridge from './pages/Bridge';
import Yield from './pages/Yield';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import FAQ from './pages/FAQ';
import Download from './pages/Download';
import Roadmap from './pages/Roadmap';
import Pools from './pages/Pools';
import Stats from './pages/Stats';
import Community from './pages/Community';
import Exchanges from './pages/Exchanges';
import Papers from './pages/Papers';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#1e1e1e] text-white flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Layout showCTA={false}><Home /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/tools" element={<Layout><Tools /></Layout>} />
            <Route path="/exchange" element={<Layout><Exchange /></Layout>} />
            <Route path="/staking" element={<Layout><Staking /></Layout>} />
            <Route path="/bridge" element={<Layout><Bridge /></Layout>} />
            <Route path="/yield" element={<Layout><Yield /></Layout>} />
            <Route path="/blog" element={<Layout><Blog /></Layout>} />
            <Route path="/blog/:slug" element={<Layout><BlogPost /></Layout>} />
            <Route path="/faq" element={<Layout><FAQ /></Layout>} />
            <Route path="/download" element={<Layout><Download /></Layout>} />
            <Route path="/roadmap" element={<Layout><Roadmap /></Layout>} />
            <Route path="/pools" element={<Layout><Pools /></Layout>} />
            <Route path="/stats" element={<Layout><Stats /></Layout>} />
            <Route path="/community" element={<Layout><Community /></Layout>} />
            <Route path="/exchanges" element={<Layout><Exchanges /></Layout>} />
            <Route path="/papers" element={<Layout><Papers /></Layout>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;