import style from "./button.module.css";

function Button ({text}){
return(
<button className={style.Button_Container}>
{text}
</button>
)
}

export default Button