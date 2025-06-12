
export function Icono({ clase, posicion, onClick }) {
    return (
        <div
            className={`absolute opacity-25 text-4xl lg:text-5xl text-green-black ${posicion} ${onClick ? 'cursor-pointer' : ''}`}
            onClick={onClick}
        >
            <i className={clase}></i>
        </div>
    );
}
