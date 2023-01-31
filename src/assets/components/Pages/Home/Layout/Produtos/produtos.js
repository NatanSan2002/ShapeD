import style from "./produtos.module.css";

import Carrosel from "../../../../Reutilizados/carrosel/carrosel";

/*Arrays locais como banco de dados*/

import produtos_list from "../../../../../lists/produtos/produtos";
import UpTreino_list from "../../../../../lists/produtos/p_up_no_treino";
import incrementos_list from "../../../../../lists/produtos/p_incrementos";

import Chose from "../../../../Reutilizados/chose/chose";
import destaque from "../../../../../images/geral/whey_destaque.png";




function Produtos() {
    return (
        <article className={style.Produtos_Container}>

            <Carrosel list={produtos_list} sections={["Ofertas", "Pré-Treino", "Pós-Treino"]}
                types={["Ofertas", "pre-treino", "pos-treino"]} /> {/*Sessão de produtos*/}


            <Chose title={"Escolha Seu Objetivo"}
                divs={[
                    { text: "ganho de massa", url: "/" },
                    { text: "saúde e qualidade de vida ", url: "/" },
                    { text: "emagrecimento e definição ", url: "/" },
                    { text: "energia e resistência ", url: "/" },
                ]} />

            <Carrosel list={UpTreino_list} title="Up no Treino" />

            <Carrosel list={incrementos_list} title="Incremente sua Receita" />

            <Chose title={"Produto em Destaque"} img={destaque} alt="Produto Whey Gold Standard" text="
            O Whey Protein é um suplemento essencial para o crescimento muscular. O Whey Protein se torna uma fonte de proteína mais eficiente para o corpo humano, fornece aminoácidos ao seu corpo, os quais são essenciais para o crescimento muscular. Dentre os principais benefícios que o Whey Protein oferece ao seu organismo, a ação antioxidante do suplemento, que faz com que seu sistema imunológico seja fortalecido e ainda reduz os efeitos de overtraining.
            "/>
        </article>


    )
}


export default Produtos;