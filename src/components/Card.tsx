import UserInfo from "./UserInfo"


type SocialMediaItem ={
  label:string;
  link: string;
}
export type User = {
  name: string;
  location: string;
  bio: string;
  socialMedia: SocialMediaItem[]
}
  
  
const Card = () => {
  const user:User = {
    name: "Jessica Randall",
    location: "London, United Kingdom",
    bio: "Front-end developer and avid reader.",
    socialMedia: [
      {
        label:"GitHub",
        link: "GitHub"
      },
      {
        label: "Frontend Mentor",
        link: "Frontend Mentor"
      },
      {
        label: "LinkedIn",
        link: "LinkedIn"
      },
      {
        label: "Twitter",
        link: "Twitter"
      },
      {
        label: "Instagram",
        link: "Instagram"
      }
    ]
     
    
  }
  return (
    <div className=" bg-grey800 p-8 rounded-lg xs:min-w-[300px] min-w-[385px] ">
      <UserInfo user={user} />
    </div>
  );
}

export default Card