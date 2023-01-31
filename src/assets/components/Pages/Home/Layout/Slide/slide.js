import { useRef, useEffect, useState } from "react";

import style from "./slide.module.css";

function Slide({ img1, img2, img3, img4, alt1, alt2, alt3, alt4 }) {

    const carrosel = useRef(null);

    const [slides, Setslides] = useState();

    const [jump, Setjump] = useState(0);

    const ClickSlide = (position) => {
        let i = 0;
        let jump = 0;


        for (i; i < position; ++i) {
            jump += 1;
        }

        carrosel.current.scrollLeft = jump * slides[1].offsetWidth;

        Setjump(jump);
    }

    const [win_size, Setwin_size] = useState(window.innerWidth);
    const [win_roll, Setwin_roll] = useState(window.scrollY);

    useEffect(() => {
        Setslides(carrosel.current.children);


        if (win_roll < 200 && win_size > 480) {
            const interval = setInterval(() => {

               if(jump < carrosel.current.children.length - 1){
                carrosel.current.scrollLeft += carrosel.current.children[1].offsetWidth;
                Setjump(jump + 1);
               }else{
                carrosel.current.scrollLeft = 0;
                Setjump(0);
               }

                
            }, 3000);

            function Resize() {
                Setwin_size(window.innerWidth);
            }

            function Scrolling() {
                Setwin_roll(window.scrollY);
            }

            window.addEventListener("resize", Resize);
            window.addEventListener("scroll", Scrolling);


            return () => clearInterval(interval);


        }


    }, [jump, win_roll, win_size])

    return (

        <article className={style.Slide_Container}>
            <div className={style.carrosel} ref={carrosel}>
                <img src={img1} alt={alt1} />
                <img src={img2} alt={alt2} />
                <img src={img3} alt={alt3} />
                <img src={img4} alt={alt4} />
            </div>
            <div className={style.buttons}>
                <div className={jump == 0 ? (style.settado) : ""} onClick={() => { ClickSlide(0) }}></div>
                {img2 && <div className={jump == 1 ? (style.settado) : ""} onClick={() => { ClickSlide(1) }}></div>}
                {img3 && <div className={jump == 2 ? (style.settado) : ""} onClick={() => { ClickSlide(2) }}></div>}
                {img4 && <div className={jump == 3 ? (style.settado) : ""} onClick={() => { ClickSlide(3) }}></div>}

            </div>
        </article>
    )
}

export default Slide;