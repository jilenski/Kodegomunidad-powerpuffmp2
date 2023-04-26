import "./settings.css"


export default function Settings() {
  return (
    <div className ="settings">

        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">
              Update your account
            </span>

            <span className="settingsDeleteTitle">
              Delete account
            </span>
          </div>
          <div className="settingsForm">
            <label> Profile Picture </label>
            <div className="settingsPP">
              <img 
              src="https://images.pexels.com/photos/7521232/pexels-photo-7521232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="" 
              />
              <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
              </label>
              <input type="file" id ="fileInput"style ={{display:"none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder="Ruby" />
            <label>Email</label>
            <input type="email" placeholder="ruby.almoite@gmail.com" />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
          </div>
        </div>

    </div>
  )
}
