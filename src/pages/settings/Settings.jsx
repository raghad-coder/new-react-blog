import "./settings.css"
import Sidebar from './../../components/sidebar/Sidebar';

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle"> Update Your Account</span>
          <span className="settingsDeleteTitle"> Delete Account</span>
        </div>
        <form className="settingsForm">
          <label> profile picture</label>
          <div className="settingsPP">
            <img src="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg" 
            alt="" />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon  fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
          </div>
          <label> Username</label>
          <input type="userName" placeholder=" Raghad" />
          <label>Email</label>
          <input type="email" placeholder="raghad@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit"> Update </button>

        </form>
      </div>
      <Sidebar />
    </div>
  )
}
