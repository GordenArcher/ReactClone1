
const GridDataComp = (props) => {
  return (
    <div className="col" key={props.index}>
        <div className="row">
            <div className='icon' style={{background: props.backColor}}>
                <ion-icon name={props.icon}></ion-icon>
            </div>

            <div className='grid_gg'>
                <div>
                    <div className="grid_header_text" style={{fontWeight:'bolder', color:'#cccccc7e'}}>
                        {props.head}
                    </div>

                    <div className="grid_numbers">
                        {props.numbers}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}




export default GridDataComp