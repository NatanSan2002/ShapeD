import style from "./Centralizer.module.css";

function Centralizer(props){
return (
<article className={style.Centralizer_Container}>
{props.children}
</article>
)
}


export default Centralizer;