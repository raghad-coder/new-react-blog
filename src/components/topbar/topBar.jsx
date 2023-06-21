import "./topbar.css";

const TopBar = () => {
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
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE </li>
                    <li className="topListItem">LOGOUT</li>



                </ul>
            </div>
            <div className="topRight">
              
            <img  className="topImg"src="https://damassets.autodesk.net/content/dam/autodesk/www/industry/3d-animation/create-beautiful-3d-animations-thumb-1204x677.jpg" alt=""/>
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
}

export default TopBar;
