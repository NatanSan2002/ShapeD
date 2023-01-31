import style from "./iten.module.css";

import Button from "../Button/button";


function Iten({ img, name, price, parcelas, promo }) {

    const desconto = 0.20;

    const preco = String(price.toFixed(2)).replace(".", ",")
    const vezes = String((price / parcelas).toFixed(2)).replace(".", ",");

    const final_price = String((price - (price * desconto)).toFixed(2)).replace(".", ",");

    return (
        <div className={style.Iten_Container}>
            {promo === true ? (<div className={style.promo}> Promoção </div>) : ""}
            <img src={require("../../../images/produtos/" + img)} alt={"Imagem Produto: " + name} />
            {/*os caminhos ../ antes da "img" não é necessario no banco de dados*/}
            <span>{name}</span>
            <div className={style.price}>
                <p>R$ {preco}</p>
                <span>em até {parcelas}x de R$ {vezes}</span>
            </div>

            <div className={style.line}></div>

            <div className={style.a_vista}>
                <div>
                    <span> Ou à vista com</span>
                    <div>
                        <p className={style.desconto}> {desconto * 100}%  </p> <p> OFF</p> {/*Desconto atual*/}
                    </div>

                </div>
                <p className={style.final_value}> R$ {final_price.length < 5 ? ("0" + final_price) : final_price} </p>
            </div>

            <Button text={"Comprar"} />

        </div>
    )
}

export default Iten;