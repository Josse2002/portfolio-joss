import { SocialMedia } from "./socialMedia/SocialMedia";
export function InformationProfile() {
  return (
    <>
      <div className="flex flex-col items-start mt-10">
        <h2 className="text-4xl font-bold text-green-dark">Josse Castillo</h2>
        <p className="tracking-widest text-gray-700">
          Fronted developer <span className="text-green-dark font-bold">|</span>{" "}
          UX/UI Designer
        </p>
        <SocialMedia />
        <p className="mt-3">
          I seek the perfect harmony between
          <span className="font-bold text-green-dark"> aesthetics</span> and
          <span className="font-bold text-green-dark"> usability</span>, blending
          each line of code with visual concepts.
        </p>
      </div>
    </>
  );
}
