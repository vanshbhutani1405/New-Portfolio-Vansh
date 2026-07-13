import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'

export default function App() {
  return (
    <div className="overflow-x-clip bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  )
}
