import { Link } from "react-router-dom"

const Header = ()=>(
  

 <div id="header-div">
  <div id="logo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCi32Vmt1sYHoeFJTD1AtUkThY7pFDttjHWg&s"/>
  </div>
  <ul id="top-menu">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/contact">Contact Us</Link></li>
  </ul>
</div>)



export default Header