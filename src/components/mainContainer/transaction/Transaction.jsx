import "../transaction/transaction.css"
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';

const Transaction = ({icon, item, time, amount}) => {
  return (
    <div className="items">
        {icon} 
        <div className="item">
            <h4>{item}</h4>
            <p>{time}</p>
        </div>
        <p>{amount}</p>
    </div>
  )
}

export default Transaction