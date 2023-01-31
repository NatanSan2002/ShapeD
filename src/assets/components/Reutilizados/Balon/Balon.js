import style from "./Balon.module.css";

function Balon(props){
return(
<div className={style.Balon_Container}>
{props.children}
<div className={style.triangule}> </div>
<div className={style.border}> </div>
</div>
)
}

export default Balon;