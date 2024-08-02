import Image from "next/image"
import ListBtnLink from "./ListBtnLink";
import { User } from "./Card";

type UserInfoProps = {
  user : User;
}
const UserInfo:React.FC<UserInfoProps> = ({user}) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/avatar-jessica.jpeg"
        alt="Profile picture of Jessica Randall"
        width={90}
        height={90}
        className="rounded-full"
      />

      <h1 className="text-white pt-5 text-2xl font-semibold">
        {user.name}
      </h1>
      <span className="text-sm xs:text-[10px] text-primary font-semibold">
        {user.location}
      </span>
      <span className="text-sm pt-5 text-gray-400 italic">
       {user.bio}
      </span>

      <ListBtnLink socialMedia={user.socialMedia} />
    </div>
  );
}

export default UserInfo