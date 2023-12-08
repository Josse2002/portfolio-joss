import { SocialMedia } from "./socialMedia/SocialMedia";
export function InformationProfile() {
  return (
    <>
      <div className="flex flex-col items-start mt-10">
        <h2 className="text-4xl font-bold text-green-dark">Josse Castillo</h2>
        <p className="tracking-widest">Fronted developer <span className="text-green-dark font-bold">|</span> UX/UI Designer</p>
        <SocialMedia />
        </div>
    </>
  );
}
