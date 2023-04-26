import "./topBar.css"
import { Link } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive'


export default function TopBar() {


    const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    
   const user = false;

  return (

    <div className ="top">
      <div className="topLeft">
        <img className= "logo1" src="../images/kodego-munidad-logo.png" alt="" />

      </div>

      <div className="topCenter"> 
            <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to= "/">HOME </Link>
                </li>
                <li className="topListItem"><Link className="link" to= "/about"> ABOUT </Link></li>
                <li className="topListItem"><Link className="link" to= "/contact"> COMMUNITY</Link></li>
                <li className="topListItem"> <Link className="link" to= "/write"> CAREERS </Link></li>
                <li className="topListItem"> <Link className="link" to= "/create">EVENTS</Link></li>
                <li className="topListItem">{user && "LOGOUT"}</li>
            </ul>
      </div>
      <div className="topRight"> 
      
      {
        user ? (

          <img 
          className="topImg"
          src ="https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt =""
          />
        ) : (
          <ul className ="topList">
            <li className ="topListItem"> <Link className ="link" to="/login"> LOGIN</Link> </li>
            <li className ="topListItem"> <Link className ="link" to="/register">REGISTER</Link> </li>
        </ul>
        )
      }
      <i className="topIcon fa-brands fa-square-facebook"></i>
      <i className="topIcon fa-brands fa-square-twitter"></i>
      <i className="topIcon fa-brands fa-square-pinterest"></i>
      <i className="topIcon fa-brands fa-square-instagram"></i>
      <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
      
      </div>
    </div>
  )
}
