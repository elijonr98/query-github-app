import { FC } from "react"
import { ReactComponent as DownArrow } from "../assets/downArrow.svg"

/**
 * Buttons that are used for filtering
 */
const SortButton: FC<{ name: string }> = ({ name }) => {
    return <div className="flex rounded-lg bg-gray-200 h-8 w-fit shadow-md mx-1">
        <div className="flex px-4 border-r items-center justify-center cursor-pointer hover:bg-gray-300 hover:rounded-l-lg">
            <span>{name}</span>
        </div>
        <div className="flex items-center justify-center  w-10 h-8 cursor-pointer  hover:bg-gray-300 hover:rounded-r-lg">
            <DownArrow />
        </div>
    </div>
}
export default SortButton
