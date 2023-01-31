import { useRef, useState, useEffect } from "react";

import style from "./carrosel.module.css";

import Iten from "../iten/iten";



function Carrosel({ list, sections, title, types }) { // se tiver sessões passa-las em forma de array, todos os types dos produtos (pré-treino) da lista, passar na mesma ordem da sections, e se quiser a sessão Ofertas colocar no primeiro vetor: "Ofertas"

    const carrosel = useRef(null);

    const [position_type, Setposition_type] = useState(0);

    const brokens = [ // Tamanhos de media querys que o container carrosel se adapta e muda o numero de itens dentro
        {
            width: "default", itens: 5,
        },

        {
            width: 1186, itens: 5,
        },
        {
            width: 950, itens: 4,
        },
        {
            width: 732, itens: 2,
        },
        {
            width: 532, itens: 2,
        },
        {
            width: 418, itens: 1,
        },
    ];

    const [win_width, Setwin_width] = useState(window.innerWidth);

    const [divisions, Setdivisions] = useState(brokens[0].itens);

    const [itens, Setitens] = useState()

    const Map_division = [];

    function AddVetors() {
        let i;

       const vezes = itens / divisions;

        for (i = 0; i < vezes; ++i) {
            Map_division.push(i);
        }

        
    }


    AddVetors();

    const [jump, Setjump] = useState(0);

    const ClickDiv = (position) => {
        let i = 0;
        let jump = 0;


        for (i; i < position; ++i) {
            jump += 1;
        }

        carrosel.current.scrollLeft =  jump * carrosel.current.offsetWidth;

        Setjump(jump);
    }

    

   





    useEffect(() => {

        Setitens(carrosel.current.children.length);

        function SetWidth() {
            Setwin_width(window.innerWidth);
            Setitens(carrosel.current.children.length);
        }

        window.addEventListener("resize", SetWidth);
    

        let i;


        for (i = brokens.length - 1; i >= 0; --i) {

            if (win_width <= brokens[i].width) {
                Setdivisions(brokens[i].itens);
                i = -1;

            } else if (brokens[i].width === "default") {
                Setdivisions(brokens[i].itens);
                i = -1;
            }

        }




    }, [win_width,position_type])




    


    let increment = 0;


    return (
        <div className={style.Carrosel_Container}>
            <div className={style.line}>
                <div className={style.l}></div>
                {sections ? (
                    <div className={style.sections}>
                        {sections.map((i => {

                            if (i != sections[sections.length - 1]) {
                                ++increment;
                                let atual = {
                                    vetor: increment - 1,
                                    value: function () {
                                        return this.vetor;
                                    }
                                }
                                return (<h6 className={
                                    position_type === atual.value() ? (`${style.last} ${style.settado}`) :
                                        style.last} onClick={() => Setposition_type(atual.value())}>{i}</h6>);
                            } else {
                                ++increment;
                                let atual = {
                                    vetor: increment - 1,
                                    value: function () {
                                        return this.vetor;
                                    }
                                }

                                return (<h6 className={
                                    position_type === atual.value() ? (style.settado) : ""}
                                    onClick={() => Setposition_type(atual.value())}>{i}</h6>)
                            }
                        }))

                        }

                    </div>
                ) : <h6>{title}</h6>
                }
                <div className={style.l}></div>
            </div>

            <div className={style.carrosel} ref={carrosel}>
                {
                    list.map((i) => {
                        if (sections != undefined) {
                            if (i.type === types[position_type]) {
                                return (
                                    <Iten img={i.img} name={i.name} price={i.price} parcelas={i.parcelas} promo={i.promo} />
                                )
                            } else if (types[position_type] === "Ofertas") {
                                if (i.promo === true) {
                                    return (
                                        <Iten img={i.img} name={i.name} price={i.price} parcelas={i.parcelas} promo={i.promo} />
                                    )
                                }
                            }
                        } else {
                            return (
                                <Iten img={i.img} name={i.name} price={i.price} parcelas={i.parcelas} promo={i.promo} />
                            )
                        }
                    })
                }

            </div>
            <div className={style.buttons}>
                 { Map_division.map((i) => {
                    return (<div className={jump == i ? (style.settado) : ""} onClick={() => ClickDiv(i)}> </div>)
                 })
                 }

            </div>
        </div>
    )
}


export default Carrosel;