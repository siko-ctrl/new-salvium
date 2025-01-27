import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createHashRouter, Outlet } from 'react-router-dom'
import './index.css'

// Import pages
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Bridge from './pages/Bridge'
import Community from './pages/Community'
import Download from './pages/Download'
import Exchange from './pages/Exchange'
import Exchanges from './pages/Exchanges'
import FAQ from './pages/FAQ'
import Papers from './pages/Papers'
import Pools from './pages/Pools'
import Roadmap from './pages/Roadmap'
import Staking from './pages/Staking'
import Stats from './pages/Stats'
import Tools from './pages/Tools'
import Yield from './pages/Yield'

// Import Layout
import Layout from './components/Layout'

const router = createHashRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/blog/:slug',
        element: <BlogPost />,
      },
      {
        path: '/bridge',
        element: <Bridge />,
      },
      {
        path: '/community',
        element: <Community />,
      },
      {
        path: '/download',
        element: <Download />,
      },
      {
        path: '/exchange',
        element: <Exchange />,
      },
      {
        path: '/exchanges',
        element: <Exchanges />,
      },
      {
        path: '/faq',
        element: <FAQ />,
      },
      {
        path: '/papers',
        element: <Papers />,
      },
      {
        path: '/pools',
        element: <Pools />,
      },
      {
        path: '/roadmap',
        element: <Roadmap />,
      },
      {
        path: '/staking',
        element: <Staking />,
      },
      {
        path: '/stats',
        element: <Stats />,
      },
      {
        path: '/tools',
        element: <Tools />,
      },
      {
        path: '/yield',
        element: <Yield />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
