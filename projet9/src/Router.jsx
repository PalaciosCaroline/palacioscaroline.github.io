import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Erreur404 from './pages/Erreur404'
import Logement from './pages/Logement'

export default function Router() {
  return (
    <Routes>
    
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      <Route path={`${process.env.PUBLIC_URL}/Apropos`} element={<Apropos />} />
      <Route path={`${process.env.PUBLIC_URL}/logement/:id`} element={<Logement />} />
      <Route path={`${process.env.PUBLIC_URL}*`} element={<Erreur404 />} />
    </Routes>
  )
}
