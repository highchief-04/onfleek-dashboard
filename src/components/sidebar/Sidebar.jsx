import "../sidebar/sidebar.css"
import vector from "../../assets/images/logo.png"
import HomeIcon from '@mui/icons-material/Home';
import PieChartIcon from '@mui/icons-material/PieChart';
import CommentIcon from '@mui/icons-material/Comment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="header">
            <img src={vector} alt="logo" className="logo" />
            
        </div>
        <div className="icons">
            <HomeIcon className="icon active" />
            <PieChartIcon className="icon" />
            <CommentIcon className="icon" />
            <AccountBalanceWalletIcon  className="icon" />

        </div>
    </div>
  )
}

export default Sidebar