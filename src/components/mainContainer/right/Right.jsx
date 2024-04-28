import React from 'react'
import "../right/right.css"
import DriveFileRenameOutlineSharpIcon from '@mui/icons-material/DriveFileRenameOutlineSharp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import TvIcon from '@mui/icons-material/Tv';
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import card from "../../../assets/images/debit-card.png"
import Transaction from '../transaction/Transaction';
const Right = () => {
  return (
    <div className="right">
        <div className="wrapper">
        <DriveFileRenameOutlineSharpIcon className='icon' />
        <div className="progress">
            <div className="percentage">
                   <CircularProgressbar value={38} text={"38%"} strokeWidth={2}  />
            </div>
            <h3>$10,600</h3>
        </div>
        <div className="card">
            <div className="text">
                <h2>My Card</h2>
                <MoreHorizIcon className='icon' />
            </div>
                <img src={card} alt="card" 
                className="img"
                />
                <div className="left-bottom">
                  <div className="text">
                    <h2>Transaction</h2>
                    <AddIcon className='add-icon' />
                  </div>
                  <Transaction icon={<LocalTaxiIcon className='transaction-logo' />} item={"Taxi"} time={"01:21pm"} amount={"-$9.20"} />
                  <Transaction icon={< ShoppingBagIcon className='transaction-logo' />} item={"Shopping"} time={"11:15am"} amount={"-$142.00"} />
                  <Transaction icon={< TvIcon className='transaction-logo' />} item={"Netflix"} time={"Jan 10,2020"} amount={"-$24.99"} />
                </div>
        </div>
        
        </div>
    </div>
  )
}

export default Right