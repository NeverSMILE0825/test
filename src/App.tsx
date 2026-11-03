import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useVisitorTracker } from './hooks/useVisitorTracker'
import { HomePage } from './pages/HomePage'
import { DashboardPage } from './pages/DashboardPage'

function Tracker() {
  useVisitorTracker()
  return null
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Tracker />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
