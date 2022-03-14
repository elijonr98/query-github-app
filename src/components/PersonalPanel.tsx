import { FC } from "react"
import { ReactComponent as Building } from "../assets/building.svg"
import { ReactComponent as Location } from "../assets/location.svg"
import SearchUser from "./SearchUser";


interface Person {
  avatar_url?: string;
  name?: string;
  login?: string;
  bio?: string;
  followers?: number;
  following?: number;
  company?: string;
  location?: string;
  email?: string;
  twitter_username?: string;
}

interface Props {
  personalInfo: Person;
  fetchMyAPI: (val: string) => void;
};

/**
 * Component for showing the personal data of the user
 * A search functionality that can change the github profile
 */
const PersonalPanel: FC<Props> = ({ personalInfo, fetchMyAPI }) => {
  return <div className='flex flex-col mx-2 '>
    <img src={personalInfo.avatar_url} alt="img" className='flex border rounded-full shadow-lg items-center justify-center'></img>
    <span className="text-2xl font-bold mt-2">{personalInfo.name}</span>
    <SearchUser
      currentUser={personalInfo?.login || ""}
      fetchMyAPI={fetchMyAPI}
    />
    <div className='mt-2 bg-gray-200 hover:bg-gray-300 duration-300 w-full flex items-center justify-center py-1 border rounded-md cursor-pointer'>Follow</div>
    <span className="mt-2 text-lg">{personalInfo.bio}</span>

    <span className="mt-2 mb-4">{personalInfo.followers} followers {personalInfo.following} following</span>

    {personalInfo.company &&
      <span className="flex"><Building />{personalInfo.company}</span>}
    {personalInfo.location &&
      <span className="flex mt-2"><Location />{personalInfo.location}</span>}
    {personalInfo.email &&
      <span className="mt-2">{personalInfo.email}</span>}
  </div>
}
export default PersonalPanel
