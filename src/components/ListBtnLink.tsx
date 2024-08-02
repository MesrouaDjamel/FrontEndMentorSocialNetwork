import Link from "next/link";
import BtnLink from "./BtnLink"


type SocialMediaItem = {
  label: string;
  link: string;
};

  
type ListBtnLinkProps ={
  socialMedia : SocialMediaItem[]
}
const ListBtnLink:React.FC<ListBtnLinkProps> = ({socialMedia}) => {
  return (
    <div className="flex flex-col">
      {socialMedia.map((socialMedia) => (
        <Link key={socialMedia.label} href={socialMedia.link}>
          <BtnLink socialMediaName={socialMedia.label} />
        </Link>
        
      ))}
      
    </div>
  );
}

export default ListBtnLink