
export function Icono({ clase, posicion }) {
    return (
        <div className={`absolute opacity-25 text-4xl lg:text-5xl text-green-black ${posicion}`}>
            <i className={clase}></i>
        </div>
    );
}
