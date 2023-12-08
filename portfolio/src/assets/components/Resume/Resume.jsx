import { ProfilePhoto } from "./profilePhoto/ProfilePhoto";
import { InformationProfile } from "./Information/InformationProfile";
export function Resume() {
  return (
    <div>
      <div className="flex flex-row items-start">
        <ProfilePhoto />
        <InformationProfile />
      </div>
    </div>
  );
}
