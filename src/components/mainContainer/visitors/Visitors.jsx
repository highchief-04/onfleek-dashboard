import "../visitors/visitors.css"
import Text from "../text/Text";
import { LineChart, Line, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 2800, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 1398, amt: 2290 },


  ];
  
const Visitors = () => {
   
  return (
    <div className="visitors">
        <div className="chart">
              
    <ResponsiveContainer width={120} height={80}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid  />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8"  fillOpacity={1} fill="url(#colorUv)" />
      </LineChart>
    </ResponsiveContainer>
        </div>
        <Text title={"Visitors"} amount={10320}/>
       
    </div>
  )
}

export default Visitors