import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://d1j8pt39hxlh3d.cloudfront.net/uploads/1-04_1.png" alt="" />
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.

            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">GATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FoLLOW US</span>
            <div className="sidebarSocial"></div>
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                 <i className="sidebarIcon fa-brands fa-twitter"></i>
                 <i className="sidebarIcon fa-brands fa-pinterest"></i>
                 <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
    </div>
  )
}
