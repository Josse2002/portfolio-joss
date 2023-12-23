import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; 

export function Icono({ clase, posicion }) {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div data-aos="fade-up" className={`absolute opacity-25 text-4xl lg:text-5xl text-green-black ${posicion}`}>
            <i class={clase}></i>
        </div>
    );
}
