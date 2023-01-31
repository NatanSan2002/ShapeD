import style from "./chose.module.css";

import background from "../../../images/geral/bck_grey.jpg";

function Chose({ title, divs, img, alt, text }) { /*passar divs por array, cada uma com um objeto com: text, e url*/

    return (
        <div className={style.Chose_Container}>

<img  className={style.bckg} src={background} alt="Background fundo"/>
      
            <div className={style.line}>
                <div className={style.l}></div>
                <h1>{title}</h1>
                <div className={style.l}></div>
            </div>


            { img ? (
             <div className={style.destaque}> 
                <img src={img} alt={alt}/> 
                <div> 
                <p> {text}</p>
                <button> Ver Mais</button>
                </div>
                
             </div>
            ) : (
                <div>
                    {
                        divs.map((i) => {
                            return (
                                <a href={i.url}>
                                    <p>{i.text}</p>
                                </a>
                            )
                        })
                    }
                </div>
            )
            }
        </div>
    )
}

export default Chose;