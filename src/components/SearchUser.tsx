import { ChangeEvent, FC } from "react"
import { ReactComponent as SearchIcon } from "../assets/search.svg"

interface Props {
    user: string;
    setUser: (val: string) => void;
    fetchMyAPI: () => void;
};

const SearchUser: FC<Props> = ({ user, setUser, fetchMyAPI }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value)
    }
    const handleOnClick = () => {
        fetchMyAPI();
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