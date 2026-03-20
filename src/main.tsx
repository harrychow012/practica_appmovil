import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { UserList } from './components/UserList.tsx'
import { GradeCalculator } from './components/GradeCalculator.tsx'
import { StatusTogle } from './components/StatusToggle.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <UserList/>
    <GradeCalculator/>
    <StatusTogle/>
  </StrictMode>,
)
