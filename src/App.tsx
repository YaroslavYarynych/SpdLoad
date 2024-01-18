import { Outlet } from 'react-router-dom'
import { Header } from './components/molecules/header/Header.js'
import './App.scss'

export function App() {
  return (
  <>
    <Header />
    <main className="container">
      <Outlet />
    </main>
  </>
  )
}
