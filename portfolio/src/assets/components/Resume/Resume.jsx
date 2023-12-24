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
        <ButtonPrincipal text={"Download resume"}  link={"https://firebasestorage.googleapis.com/v0/b/portfolio-joss-d5e71.appspot.com/o/docs%2FCV_Joss.pdf?alt=media&token=2bca03a3-b34d-4869-ae52-2c3d67c88f3e"} />
      </div>
    </div>
  );
}
