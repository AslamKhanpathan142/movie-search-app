import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './components/Home.jsx'
import Favorite from './components/Favorite.jsx'
import Content from './components/Content.jsx'
import About from './components/About.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App />, children: [
    {path: '/', element: <Home/>},
    {path: '/Favorite', element: <Favorite/>},
    {path: '/Content', element: <Content/>},
    {path: '/About', element: <About/>},
  ]},
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
