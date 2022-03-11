import { ReactComponent as Building } from "../assets/building.svg"
import { ReactComponent as Location } from "../assets/location.svg"
const PersonalPanel = ({personalInfo }: any) => {
    return<div className='flex flex-col mx-2'>
        <img src={personalInfo.avatar_url} className='flex  border rounded-full shadow-lg items-center justify-center'></img>
        <span className="text-2xl font-bold">{personalInfo.name}</span>
        <span className="text-xl text-gray-500">{personalInfo.login}</span>
        <div className='mt-2 bg-gray-200 hover:bg-gray-300 duration-300 w-full flex items-center justify-center py-1 border rounded-md cursor-pointer'>Follow</div>
        <span className="mt-2 text-lg">{personalInfo.bio}</span>
    
        <span className="mt-2 mb-4">{personalInfo.followers} followers {personalInfo.following} following</span>
        
        {personalInfo.company && 
        <span className="flex"><Building />{personalInfo.company}</span>   }
        {personalInfo.location &&
        <span className="flex"><Location />{personalInfo.location}</span>}
        <span>{personalInfo.email}</span>
        <span>{personalInfo.twitter_username}</span>
    </div>
}
export default PersonalPanel
