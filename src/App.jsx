import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import StartFramework from './Components/StartFramework/StartFramework';
import Layout from './Components/Layout/Layout';
import Portfolio from './Components/Portfolio/Portfolio';
import NotFound from './Components/Notfound/NotFound';


let routers = createBrowserRouter([
  {path: '', element: <Layout/>, children:[
    {index: true, element: <StartFramework/>},
    {path: 'home', element: <StartFramework/>},
    {path: 'contact', element: <Contact/>},
    {path: 'about', element: <About/>},
    {path: 'portfolio', element: <Portfolio/>},
    {path: '*', element: <NotFound/>},
  ]}
])

export default function App() {

  return <RouterProvider router={routers}></RouterProvider> 
}


