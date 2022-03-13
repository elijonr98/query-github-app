import { ReactComponent as StarIcon } from "../assets/starIcon.svg"
import { ReactComponent as DownArrow } from "../assets/downArrow.svg"
const Star = () => {
    return <div className="flex rounded-lg bg-gray-100 h-8 w-fit">
        <div className="flex px-2 border-r items-center justify-center cursor-pointer hover:bg-gray-200 w-20 hover:rounded-l-lg">
            <StarIcon />
            <span>Star</span>
        </div>
        <div className="flex  items-center justify-center  w-10 h-8 cursor-pointer  hover:bg-gray-200 hover:rounded-r-lg">
            <DownArrow />
        </div>
    </div>
}
export default Star
