import style from "./fretes.module.css";

import bus_icon from "../../../../../images/icons/bus.png";
import cut_icon from "../../../../../images/icons/cut.png";


function Fretes({ up1, up2, a_vista }) {  /*up1 e 2 são as compras acima de tal preço, e a porcentagem de desconto a vista*/

    const valores = [String(up1.toFixed(2)).replace(".", ","), String(up2.toFixed(2)).replace(".", ",")];
    return (
        <article className={style.Fretes_Container}>
            <div className={style.fretes}>
                <div>
                    <div>
                        <p>Acima de R$ {valores[0]}</p>
                        <img src={bus_icon} alt="Caminhão Frete Grátis" />
                    </div>
                    <h6>Frete Grátis</h6>
                    <div>
                        <span> São Paulo e Região</span>
                        <span> *Saiba Mais</span>
                    </div>

                </div>
                <div className={style.par}>
                    <div>
                        <p>Acima de R$ {valores[1]}</p>
                        <img src={bus_icon} alt="Caminhão Frete Grátis" />
                    </div>
                    <h6>Frete Grátis</h6>
                    <div>
                        <span> Sudeste e Sul</span>
                        <span> *Saiba Mais</span>
                    </div>

                </div>

                <div>
                    <div>
                        <p>Entrega em até 24h</p>
                        <img className={style.vertical} src={bus_icon} alt="Caminhão Frete Grátis" />
                    </div>
                    <h6>Para SP</h6>
                    <div>
                        <span> </span>
                        <span> *Saiba Mais</span>
                    </div>

                </div>

                <div className={style.par}>
                    <div>
                        <p>pagamento à vista</p>
                        <img className={style.vertical} src={cut_icon} alt="Caminhão Frete Grátis" />
                    </div>
                    <h6>{a_vista}%  Desconto</h6>

                </div>

            </div>
        </article>
    )
}



export default Fretes;