import Customers from "../components/mainContainer/customers/Customers"
import Left from "../components/mainContainer/right/Right"
import Navbar from "../components/mainContainer/navbar/Navbar"
import Orders from "../components/mainContainer/orders/Orders"
import Visitors from "../components/mainContainer/visitors/Visitors"
import Sidebar from "../components/sidebar/Sidebar"
import "../pages/home.css"
import Right from "../components/mainContainer/right/Right"
import profile from "../assets/images/lorem.jpg"
import statistics from "../assets/images/desktop-statistics.png"
import mobileStatistics from "../assets/images/mobile-statistics.png"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowLeft, ChevronRight, PlayCircleRounded } from "@mui/icons-material"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import StarIcon from '@mui/icons-material/Star';

const data = [
  { name: 'Monday', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Tuesday', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Wednesday', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Thursday', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Friday', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Saturday', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Sunday', uv: 3490, pv: 4300, amt: 2100 },
];

export const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="mainContainer">
          <Navbar/>
          <div className="hero">
           <div className="left">
             <div className="top">
              <Visitors/>
              <Customers/>
              <Orders/>
             </div>
              <div className="middle">
                <div className="statistics">
                  <h1>Statistics</h1>
                    <select id="year">
                   <option value="year" disabled>year</option>
                   <option value="option2">2021</option>
                   <option value="option3">2022</option>
    
                  </select>
                </div>

                <img src={statistics} alt="statistics" className="desktop-statistics" />
                <img src={mobileStatistics} alt="statistics" className="mobile-statistics" />

              </div>
             <div className="bottom">
              <div className="spentTime">
                <h2 className="time">Spent Time</h2>
                
                <ResponsiveContainer width={380} height={180}>
                 <LineChart
                   data={data}
                   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                   >
                   {/* <CartesianGrid strokeDasharray="3 3" /> */}
                   <XAxis dataKey="name" />
                   <Tooltip />
                   <Legend />
                   <Line type="monotone" dataKey="pv" stroke="#FF6055" fill="#FF6055" activeDot={{ r: 8 }} />
                   <Line type="monotone" dataKey="uv" stroke="#F5F5FC" />
                 </LineChart>
               </ResponsiveContainer>
              </div>
              <div className="information">
                <div className="profile">
                  <img src={profile} alt="profile-pics" />
                  <div className="name">
                    <h3>Lilly Donavan</h3>
                    <p>Business Trainer</p>
                  </div>
                </div>
                <p className="title" >How to properly manage your business?</p>
                <div className="media">
                <div className="icons">
                    <PlayCircleIcon className="icon play"/>
                    <h6>Video</h6>
                  </div>
                  <div className="icons">
                    <AccessTimeFilledIcon className="icon clock" />
                    <h6>15 mins</h6>
                  </div>
                  <div className="icons">
                    <StarIcon className="icon star"/>
                    <h6>12 likess</h6>
                  </div>
                </div>
                <div className="connect">
                  <p className="days" >5 days ago</p>
                  <button>connect <ChevronRight className="cheveron" /> </button>
                </div>
              </div>
            </div>
           </div>
           <Right/>
        
          </div>
        </div>
    </div>
)
}
