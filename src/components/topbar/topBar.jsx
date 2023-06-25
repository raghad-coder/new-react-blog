import "./topbar.css";
import {Link} from "react-router-dom"

const TopBar = () => {
   const user = true ;
    return (
        <div className="top">
            <div className="topLeft">
                 <i className="topIcon fa-brands fa-square-facebook"></i>
                 <i className="topIcon fa-brands fa-twitter"></i>
                 <i className="topIcon fa-brands fa-pinterest"></i>
                 <i className="topIcon fa-brands fa-instagram"></i>
                 </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"> <Link className="link" to="/"> HOME </Link></li>
                    <li className="topListItem"><Link className="link" to="/"> ABOUT </Link> </li>
                    <li className="topListItem"><Link className="link" to="/"> CONTACT </Link></li>
                    <li className="topListItem"><Link className="link" to="/write"> WRITE </Link> </li>
                    <li className="topListItem"><Link className="link" to="/"> {user && "LOGOUT"} </Link></li>



                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (<img  className="topImg"src="https://damassets.autodesk.net/content/dam/autodesk/www/industry/3d-animation/create-beautiful-3d-animations-thumb-1204x677.jpg"
                    alt=""/>) : ( 
                    <>
                    <Link className="link" to="/login"> Login </Link>
                    <Link className="link" to="/register"> Register </Link>
                    </> 
                    )
                }
              
            
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
}

export default TopBar;
