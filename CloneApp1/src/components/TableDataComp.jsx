const TableDataComp = (props) => {
  return (
    <tr key={props.index}>
        <td style={{height:'100%', display:'flex', flexDirection:'row', alignItems:'center', gap:'10px'}}>
            <div className="client_img">
                <img src={props.clientImage} alt="client image" className='img'/>
            </div>

            <div style={{display:'flex', flexDirection:'column',}}>
                <span style={{fontSize:'1rem', fontWeight:'800', color:'#cccccc7e'}}>{props.clientName}</span>
                <span style={{fontSize:'.8rem', color:'#cccccc7e'}}>{props.job}</span>
            </div>
        </td>
        <td>{props.amount}</td>
        <td>
            <span>
                {props.status}
            </span>
        </td>
        <td>{props.date}</td>
    </tr>
  )
}

export default TableDataComp