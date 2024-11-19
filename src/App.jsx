import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<h1><Home /></h1>} />
      <Route path="/about" element={<h1><About /></h1>}/>
      <Route path="/contact" element={<h1><Contact /></h1>}/>
      </Routes>
      </BrowserRouter >
  )
}

export default App
