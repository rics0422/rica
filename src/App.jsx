import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './assets/components/Layout'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Academics from './assets/pages/Academics'
import Admission from './assets/pages/Admission'
import Contact from './assets/pages/Contact'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/Pages/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App