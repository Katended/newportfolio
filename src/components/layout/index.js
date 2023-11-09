import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <div className="tags top-tags">
          &lt;portfolio&gt;
          <br />
          <div className="top-tags">&lt;body&gt;</div>
          <br />
        </div>
        <Outlet />
        <div className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <div className="bottom-tag-html">&lt;/portfolio&gt;</div>
        </div>
      </div>
    </div>
  )
}

export default Layout
