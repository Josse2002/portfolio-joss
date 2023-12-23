import Joss from "../../../../assets/images/joss.jpg";
import "./ProfilePhoto.css";

export function ProfilePhoto() {
  return (
    <>
      <div className="relative lg:mr-20">
        <figure className="w-40 h-40 rounded-full overflow-hidden my-10 border-t-4">
          <img src={Joss} alt="Joss image" />
        </figure>
        <div className="w-40 h-40 border-transparent border-l-green-dark border-4 border-green-dark rounded-full absolute top-10 rotate-45"></div>
        <div className="w-40 h-40 border-transparent border-r-green-dark border-4 border-green-dark rounded-full absolute top-10 rotate-45"></div>
        <p id="star" className="absolute top-7 -left-3 text-2xl rotate-45 text-green-dark hover:scale-110">
          <i className="fa-solid fa-star"></i>
        </p>
        <p id="meteor" className="absolute top-20 -left-10 text-2xl rotate-180 hover:scale-110 text-green-dark">
          <i className="fa-solid fa-meteor"></i>
        </p>
        <p id="variable" className="absolute bottom-5 -right-0 -rotate-12 text-2xl text-green-dark hover:scale-110">
          <i className="fa-solid fa-square-root-variable"></i>
        </p>
        <p id="cloud" className="absolute top-32 -right-8 -rotate-12 text-2xl hover:scale-110 text-green-dark">
          <i className="fa-solid fa-cloud"></i>
        </p>
      </div>
    </>
  );
}
