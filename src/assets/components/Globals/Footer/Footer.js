import style from "./Footer.module.css";

import card_icon from "../../../images/icons/card_postal.png";

import fb_icon from "../../../images/icons/fcb_icon.png";
import insta_icon from "../../../images/icons/insta_icon.png";
import tel_icon from "../../../images/icons/tel_icon.png";
import whats_icon from "../../../images/icons/whats_icon.png";
import email_icon from "../../../images/icons/email_icon.png";
import map_icon from "../../../images/icons/map_icon.png";

import pix_icon from "../../../images/icons/pix_icon.png";
import avista_icon from "../../../images/icons/avista_icon.png";
import elo_icon from "../../../images/icons/elo_icon.png";
import express_icon from "../../../images/icons/express_icon.png";
import visa_icon from "../../../images/icons/visa_icon.png";
import mcard_icon from "../../../images/icons/mcard_icon.png";
import deposito_icon from "../../../images/icons/deposito_icon.png";
import boleto_icon from "../../../images/icons/boleto_icon.png";
import hpcard_icon from "../../../images/icons/hpcard_icon.png";
import shield_google from "../../../images/icons/secury_google.png";

import shaped_logo from "../../../images/icons/icon_shaped.png";

import dados from "../../../lists/info/dados";

function Footer() {
    return (
        <footer className={style.MainFooter}>
            <div className={style.email}>
                <div>
                    <img src={card_icon} alt="Icon Cartão Postal" />
                    <p> Cadastre seu e-mail para receber novidades e ofertas exclusivas</p>
                </div>
                <input type="text" placeholder="Nome" />  <input type="text" placeholder="E-mail" />
                <button> Cadastrar</button>
            </div>

            <div className={style.infos}>
                <div className={style.topics}>
                    <a href="/"> Sobre a Empresa </a>
                    <a href="/"> • Política de Privacidade  </a>
                    <a href="/"> • Termos e Condições    </a>
                    <a href="/"> • Envio e Entrega  </a>
                    <a href="/"> • Formas de Pagamento  </a>
                    <a href="/"> • Fale Conosco </a>
                    <a href="/"> • Dúvidas </a>
                    <a href="/"> • Avisos Legais </a>
                </div>
                <h6> Redes Sociais
                    <a href={dados.facebook}> <img src={fb_icon} alt="Icon Facebook " /> </a>
                    <a href={dados.insta}> <img src={insta_icon} alt="Icon Facebook " /> </a>
                </h6>

                <div className={style.mid}>
                    <div>
                        <h6> Central de Atendimento </h6>
                        <p> <img src={tel_icon} alt="Icon Telefone" /> {dados.tel}</p>
                        <p> <img className={style.whats} src={whats_icon} alt="Icon WhatsApp" /> {dados.whats}</p>
                        <p> <img src={email_icon} alt="Icon Email" /> {dados.email}</p>
                        <p> <img src={map_icon} alt="Icon Google Maps" /> {dados.end}</p>
                    </div>

                    <div>

                        <h6> Pagamento </h6>
                        <div className={style.payments}>
                            <img src={pix_icon} alt="Pix Icon" />
                            <img src={avista_icon} alt="À vista Icon" />
                            <img src={boleto_icon} alt="Boleto Icon" />
                            <img src={deposito_icon} alt="Depósito Icon" />
                            <img src={mcard_icon} alt="Master Card Icon" />
                            <img src={visa_icon} alt="VISA Icon" />
                            <img src={express_icon} alt="Express Icon" />
                            <img src={elo_icon} alt="Elo Icon" />
                            <img src={hpcard_icon} alt="Hiper Card Icon" />
                        </div>

                    </div>
                    <div>
                        <h6> Certificados e Segurança </h6>
                        <img src={shield_google} alt="Icon Google Site Seguro" />

                    </div>
                </div>
            </div>

            <div className={style.rights}>
                <div>
                    <div>
                <p> Copyright ® - Todos os direitos reservados.</p>

                    <p>Preços e condições de pagamento válidos exclusivamente para compras efetuadas no site, não valendo necessariamente para a rede de lojas físicas.
                    As imagens dos produtos são meramente ilustrativas. Todos os preços e condições comerciais estão sujeitos a alteração sem prévio aviso.</p>
                    </div>

                    <img src={shaped_logo} alt="Logo Site Shaped"/>
                    </div>
            </div>
        </footer>
    )
}

export default Footer