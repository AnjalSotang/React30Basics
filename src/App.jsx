import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* giving the routing path and importing the components from jsx file  */}
      <Route path="/" element={<Home />} /> 
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      </Routes>
      </BrowserRouter >
  )
}

export default App
