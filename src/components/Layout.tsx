import { Outlet } from 'react-router-dom'
import Navbar from './ui/Navbar'
import Footer from './ui/Footer'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-transparent text-slate-100">
      <Navbar />
      <main className="w-full flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}