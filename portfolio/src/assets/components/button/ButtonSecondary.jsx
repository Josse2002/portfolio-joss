export function ButtonSecondary({text, icon, link}) {
    return(
        <>
            <a href={link} target="_blank" className="pr-4 cursor-pointer py-2 text-green-dark font-semibold border-4 border-none hover:scale-105 transition-all">
                <i className={`${icon} my-3 mr-1 text-green-950 font-medium`}></i>
                {text}
            </a>
        </>
    );
}