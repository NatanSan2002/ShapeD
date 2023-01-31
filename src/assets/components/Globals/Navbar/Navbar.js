import {useRef,useState,useEffect} from "react";

import style from "./Navbar.module.css";

import Balon from "../../Reutilizados/Balon/Balon";

import logo from "../../../images/icons/icon_shaped.png";
import Input from "../../Reutilizados/Input/Input";
import car from "../../../images/icons/car_buy.png";
import arrow from "../../../images/icons/triangule.png";
import menu_icon from "../../../images/icons/bars_menu.png";
import close_icon from "../../../images/icons/X_close.png";



function Navbar() {

const mobile_size = 1090; /*largura de quando o menu ficará mobile*/

const menu = useRef(null);

const [trigger,Settrigger] = useState("off"); /* on/off */

const [win_size,Setwin_size] = useState(window.innerWidth);

useEffect(() => {
if(trigger === "on" ||  win_size > mobile_size){
menu.current.style.display = "block";
}else if (trigger === "off" || win_size <= mobile_size ){
    menu.current.style.display = "none";
}

const ResizeWin = () => {
Setwin_size(window.innerWidth);
}

window.addEventListener("resize",ResizeWin);


},[trigger,win_size])


    return (
        <header className={style.Navbar_Container}>
            <nav>
                <div className={style.row}>
                    <div className={style.content}>
                        <img  className={style.menu_icon} src={menu_icon} alt="Icon Menu" onClick={() => {Settrigger("on")}}/>
                        <img className={style.logo_mobile} src={logo} alt="Icon Logo Site Shaped" />
                        <div className={style.canto}>
                            <a href="/"> Entrar</a>
                            <div className={style.ball}> •</div>
                            <a href="/"> Meus Pedidos</a>
                        </div>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.content}>
                        <img src={logo} alt="Icon Logo Site Shaped" />
                        <Input text={"O que você está procurando?"} />
                        <div className={style.itens_car}> {/* Itens Adicionados ao carrinho*/}
                            <img className={style} src={car} alt="Icon Carrinho de Compras" />
                            <h6>{0}</h6>
                            <p>itens no carrinho</p>


                        </div>

                    </div>

                </div>
                <div className={`${style.row} ${style.menu}`} ref={menu}>
                    <img src={close_icon} alt="X fechar menu" onClick={() => {Settrigger("off")}}/>
                    <div className={style.content}>
                        <a href="/"> Proteínas <img src={arrow} alt="Seta para baixo" />
                            <Balon>
                                <a href="/">WHEY PROTEIN CONCENTRADO</a>
                                <a href="/">WHEY PROTEIN ISOLADO</a>
                                <a href="/"> WHEY PROTEIN HIDROLISADO</a>
                                <a href="/"> WHEY 3W / BLEND</a>
                                <a href="/">PROTEÍNA VEGANA</a>
                                <a href="/">PROTEÍNA DO OVO</a>
                                <a href="/">PROTEÍNA DA CARNE</a>
                                <a href="/">PROTEÍNA DA SOJA</a>
                            </Balon>
                        </a>
                        <a href="/"> Massa Muscular <img src={arrow} alt="Seta para baixo" />
                            <Balon>
                                <a href="/">Proteínas</a>
                                <a href="/">Hipercalóricos</a>
                                <a href="/">Creatina</a>
                                <a href="/">Precursores de Testosterona / ZMA</a>
                                <a href="/">Packs</a>
                            </Balon>
                        </a>
                        <a href="/"> Energia e Resistência <img src={arrow} alt="Seta para baixo" />
                            <Balon>
                                <a href="/">Antioxidante</a>
                                <a href="/">pré treino</a>
                                <a href="/">Carboidrato</a>
                                <a href="/">REPOSITORELETROLÍTICO</a>
                                <a href="/">Cafeína</a>
                                <a href="/">Ribose</a>
                                <a href="/">Mct</a>
                            </Balon>
                        </a>
                        <a href="/"> Emagrecer e Definir <img src={arrow} alt="Seta para baixo" />
                            <Balon>
                                <a href="/">L Carnitina</a>
                                <a href="/">Termogênico</a>
                                <a href="/">Oleo De Cártamos (Bloqueadores de gordura) </a>
                                <a href="/">Ômega 3, 6 e 9</a>
                                <a href="/">Picolinato de Cromo</a>
                                <a href="/">Colágeno</a>
                                <a href="/">Óleo de Coco</a>
                            </Balon>
                        </a>
                        <a href="/"> Aminoácidos <img src={arrow} alt="Seta para baixo" />
                            <Balon>
                                <a href="/">BCAA</a>
                                <a href="/">Aminos</a>
                                <a href="/">Arginina</a>
                                <a href="/">Glutamina</a>
                                <a href="/">Leucina</a>
                            </Balon>
                        </a>
                        <a href="/"> Vitaminas <img src={arrow} alt="Seta para baixo" />
                            <Balon>
                                <a href="/">Funcionais e Fitoterápicos</a>
                                <a href="/">Multivitaminicos</a>
                                <a href="/">Minerais</a>
                                <a href="/">MTC - Medicina Tradicional Chinesa</a>
                                <a href="/">Vitamina C</a>

                            </Balon>
                        </a>
                        <a href="/"> Comida Fitness <img src={arrow} alt="Seta para baixo" />
                            <Balon>
                                <a href="/">Preparo de alimentos</a>
                                <a href="/">Barrinhas protéicas</a>
                                <a href="/">Pastas de amendoim</a>
                                <a href="/">Adoçante Dietético</a>
                            </Balon>
                        </a>
                        <a href="/"> Acessórios <img src={arrow} alt="Seta para baixo" />
                            <Balon>
                                <a href="/">Coqueteleiras, Squeeze e Galões</a>
                                <a href="/">Roupas e Bolsas Fitness</a>
                                <a href="/">Porta cápsulas e palmatórios</a>

                            </Balon>
                        </a>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Navbar;