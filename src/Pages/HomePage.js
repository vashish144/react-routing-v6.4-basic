import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'

const HomePage = () => {
const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/product')
  }
  return (
    <div>
        <h1>Home Page </h1>

        <nav>
            {/* <a href='/product'>link to product Page</a> */}
          Go to  <Link to='/product'>link to product Page</Link>
        </nav>
        <p>
          <button onClick={handleNavigate}>Navigate</button>
        </p>
    </div>
  )
}

export default HomePage