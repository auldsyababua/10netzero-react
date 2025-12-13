import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DigitalMidstream from './pages/DigitalMidstream'
import ConsultingDesign from './pages/ConsultingDesign'
import DataCenterOps from './pages/DataCenterOps'
import Blog from './pages/Blog'
import TeamPage from './pages/TeamPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/digital-midstream" element={<DigitalMidstream />} />
        <Route path="/services/consulting-design" element={<ConsultingDesign />} />
        <Route path="/services/data-center-ops" element={<DataCenterOps />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </Router>
  )
}
