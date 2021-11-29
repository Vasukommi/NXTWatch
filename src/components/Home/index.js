import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import NXTWatchBanner from '../NXTWatchBanner'
import AllVideos from '../AllVideos'

import './index.css'

const Home = () => (
  <>
    <Navbar />
    <div className="home-page">
      <div className="desktop-side-bar">
        <Sidebar />
      </div>

      <div className="home-page-video-content">
        <NXTWatchBanner />
        <AllVideos />
      </div>
    </div>
    <div className="mobile-bottom-side-bar">
      <Sidebar />
    </div>
  </>
)

export default Home
