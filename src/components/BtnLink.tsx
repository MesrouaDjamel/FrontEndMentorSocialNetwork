
const BtnLink = ({socialMediaName}:{socialMediaName:string}) => {
  return (
    <button className=" xs:min-w-[235px] min-w-[287px]  hover:bg-primary hover:text-grey900 font-bold bg-grey700 mt-4 text-white py-2 rounded-lg ">
      {socialMediaName}
    </button>
  );
}

export default BtnLink