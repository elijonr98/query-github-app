import { ChangeEvent, FC, useState } from "react"
import { ReactComponent as SearchIcon } from "../assets/search.svg"

interface Props {
    fetchMyAPI: (val: string) => void;
    currentUser: string;
};

/**
 * Component that gives the option to switch the github user and show repositories based on input
 */
const SearchUser: FC<Props> = ({ fetchMyAPI, currentUser }) => {
    const [user, setUser] = useState(currentUser);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value)
    }
    const handleOnClick = () => {
        fetchMyAPI(user);
    }

    return <div className="flex items-center">
        <input type="text"
            className="text-gray-500 h-8 px-1 rounded-md text-lg w-1/2 border mt-2 mr-2"
            placeholder="Search user..."
            value={user}
            onChange={handleChange}
        />
        <button onClick={handleOnClick}><SearchIcon /></button>
    </div>
}
export default SearchUser