import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SharedBookmark from './pages/SharedBookmark'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shared/:shareableId" element={<SharedBookmark />} />
      </Routes>
    </Router>
  )
}
