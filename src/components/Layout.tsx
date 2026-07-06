import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'
import MobileActionBar from './MobileActionBar'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      {/* Spacer so the sticky mobile bar never covers footer content */}
      <div className="h-14 md:hidden" aria-hidden="true" />
      <MobileActionBar />
    </div>
  )
}

export default Layout
