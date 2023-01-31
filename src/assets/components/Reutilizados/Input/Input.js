import style from "./Input.module.css";

import lupa from "../../../images/icons/lupa.png";

function Input({text}){
return(
<div className={style.Input_Container}>
<input type="text" placeholder={text}/>
<button>
<img src={lupa} alt="Icon Lupa"/>
</button>
</div>
)
}

export default Input;