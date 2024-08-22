const navDataComp = (props) => {
  return (
    <li key={props.index}>
        <div  className={props.cName} style={{width: '100%'}}>
            <a href={props.href} >
                <div className="icon">
                    <box-icon name={props.icon} color={props.themesColor.color}></box-icon>
                </div>
                <div className="descript" style={props.sidebarTextStyle}>
                    {props.description}
                </div>
            </a>
        </div>
    </li>
  )
}

export default navDataComp