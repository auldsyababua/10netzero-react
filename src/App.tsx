import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

// Eager load Home for fast initial render
import Home from './pages/Home'

// Lazy load other pages for code splitting
const DigitalMidstream = lazy(() => import('./pages/DigitalMidstream'))
const ConsultingDesign = lazy(() => import('./pages/ConsultingDesign'))
const DataCenterOps = lazy(() => import('./pages/DataCenterOps'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const TeamPage = lazy(() => import('./pages/TeamPage'))

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <span className="text-muted-foreground">Loading...</span>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/digital-midstream" element={<DigitalMidstream />} />
          <Route path="/services/consulting-design" element={<ConsultingDesign />} />
          <Route path="/services/data-center-ops" element={<DataCenterOps />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}
