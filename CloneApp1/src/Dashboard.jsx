// import React from 'react'
import { grid } from './components/Data'
import { Clients } from './components/Data'
import './assets/CSS/dashboard.css'
import GridDataComp from './components/GridDataComp'
import TableDataComp from './components/TableDataComp'

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
                                <GridDataComp key={index} {...item} />
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
                                    <TableDataComp key={index} {...client} />
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