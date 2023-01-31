import style from "./home.module.css";

import Slide from "./Layout/Slide/slide";
import Fretes from "./Layout/Fretes/fretes";
import Produtos from "./Layout/Produtos/produtos";

import banner1 from "../../../images/geral/banner1.jpg";
import banner2 from "../../../images/geral/banner2.jpg";
import banner3 from "../../../images/geral/banner3.jpg";

function Home() {
    return (
        <section className={style.Home_Container}>
            
            <Slide img1={banner1} alt1="Whey New Millen - Linha Completa"
                img2={banner2} alt2="Tipos de Whey diversos"
                img3={banner3} alt3="Projeto Shape 2023" img4={banner1} alt4="alt4" />

            <Fretes up1={100.00} up2={199.00} a_vista={20} />

            <Produtos />

        </section>
    )
}

export default Home;