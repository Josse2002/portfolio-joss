import { ProfilePhoto } from "./profilePhoto/ProfilePhoto";
import { InformationProfile } from "./Information/InformationProfile";
import { ButtonPrincipal } from "../button/ButtonPrincipal";

export function Resume() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <ProfilePhoto />
        <InformationProfile />
      </div>
      <div className="flex flex-row justify-center relative">
        <ButtonPrincipal text={"Download resume"} />
      </div>
    </div>
  );
}
