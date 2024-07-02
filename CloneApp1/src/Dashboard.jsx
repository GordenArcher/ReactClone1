// import React from 'react'
import { grid } from './components/Data'
import { Clients } from './components/Data'
import './assets/CSS/dashboard.css'
import clientImg from './assets/avatar.jpeg'

const Dashboard = () => {
  return (
    <div className='dashboard_wrapper'>
        
        <main>
            <div className="main_container">
                <div className="dashboard_header">
                    <div className="dash_header">
                        <h1 style={{fontSize:'1.9rem'}}>Dashboard</h1>
                    </div>
                </div>

                <div className="grid_col_row">
                    <div className="grid bg5">
                        {grid.map((item, index) => {
                            return (
                                <div className="col" key={index}>
                                    <div className="row">
                                        <div className='icon'>
                                            <box-icon name={item.icon} color="#ffffff"></box-icon>
                                        </div>

                                        <div className='grid_gg'>
                                            <div>
                                                <div className="grid_header_text" style={{fontWeight:'bolder', color:'#cccccc7e'}}>
                                                    {item.head}
                                                </div>

                                                <div className="grid_numbers">
                                                    {item.numbers}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="table_wrapper">
                    <div className="client_table">
                        <table>
                            <thead>
                                <tr>
                                    <th className='th'>Client</th>
                                    <th className='th'>Amout</th>
                                    <th className='th'>Status</th>
                                    <th className='th'>Date</th>
                                </tr>
                            </thead>

                            <tbody className="table_container">
                            {Clients.map((client, index) => {
                                return (
                                    <tr key={index}>
                                        <td style={{height:'100%', display:'flex', flexDirection:'row', alignItems:'center', gap:'10px'}}>
                                            <div className="client_img">
                                                <img src={clientImg} alt="" className='img'/>
                                            </div>

                                            <div style={{display:'flex', flexDirection:'column',}}>
                                                <span style={{fontSize:'1rem', fontWeight:'800', color:'#cccccc7e'}}>{client.clientName}</span>
                                                <span style={{fontSize:'.8rem', color:'#cccccc7e'}}>{client.job}</span>
                                            </div>
                                        </td>
                                        <td>{client.amount}</td>
                                        <td>
                                            <span>
                                                {client.status}
                                            </span>
                                        </td>
                                        <td>{client.date}</td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>

    </div>
  )
}

export default Dashboard