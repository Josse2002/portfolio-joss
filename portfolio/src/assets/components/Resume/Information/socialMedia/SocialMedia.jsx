import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export function SocialMedia() {
  return (
    <>
      <div className="flex flex-row gap-4 mt-2 text-black-text ">
        <a className="text-3xl hover:text-green-bg duration-300" href="#">
          <AiFillGithub />
        </a>
        <a className="text-3xl hover:text-green-bg duration-300" href="#">
          <AiFillLinkedin />
        </a>
      </div>
    </>
  );
}
