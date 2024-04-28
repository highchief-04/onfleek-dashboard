import "../navbar/navbar.css"
import user from "../../../assets/images/lorem.jpg"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';


const Navbar = () => {
  return (
    <div className="navbar">
        <nav>
            <div className="search">
                <SearchOutlinedIcon className="icon" />
            <input type="text" placeholder="search" />
            </div>
            <div className="utilities">
                <h4 className="utility">Feedback</h4>
                <h4 className="utility">Contacts</h4>
                <h4 className="utility">Help</h4>
            </div>
            <div className="users">
                <div className="notifications">
                <NotificationsActiveOutlinedIcon/>
                <p className="counter"></p>
                </div>
                <div className="user">
                    <img src={user} alt="user" 
                     className="userImg"/>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar