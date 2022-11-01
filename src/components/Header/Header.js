import React from 'react'
import "./_header.scss"
import { MdExitToApp} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { log_out } from '../../redux/actions/auth.action'
const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth?.user)
  const logOutHandler = ()=> {
    dispatch(log_out())
  }
  return (
    <div className=' header'>
        <div className='header__icons'>
            <img src={user?.photoURL} alt="Avatar" />
            <MdExitToApp onClick={logOutHandler} size={30} className="exit-icon" />
        </div>
    </div>
  )
}

export default Header