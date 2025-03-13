import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route} from "react-router";
import './index.css'
import Read from './view/read'
import Blog from './view/blog'
import About from './view/about'
import Contact from './view/contact'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Blog/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/read" element={<Read/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
  </Routes>
</BrowserRouter>
)
