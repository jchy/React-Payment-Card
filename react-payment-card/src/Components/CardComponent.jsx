const CardComponent = (props) =>{
    const style = {
        float: 'right',
        marginTop:"-30px",
        marginRight:"20px"
    }
return <>
    <div className={props.className}>
    <div className="dFlex">
    <div id="date"><p>{props.date}</p></div>
    <div id="logo"><img src={props.logo} id="logoImg" /></div>
    </div>
    <button className="btn">Case Study</button>
    <h3 className={props.c2}>{props.name}</h3>
    <h3 className={props.c2}>{props.Coupon}</h3>
    <p>{props.desktop}</p>
    <div style={style}>➜</div>
    </div>
    </>
}

export default CardComponent;