
import Navbar from '../Components/NavBar/Navbar'
import { Outlet } from 'react-router-dom';

function MainLayer() {
  return (
    <div className=''>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default MainLayer
