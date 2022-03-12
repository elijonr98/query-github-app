import { FC } from "react"

interface Props {
    user: string;
    setUser: (val: string) => void;
    fetchMyAPI: () => void;
};

const SearchUser: FC<Props> = ({ user, setUser, fetchMyAPI }) => {
    const handleChange = (e: any) => {
        setUser(e.target.value)
    }
    const handleOnClick = () => {
        fetchMyAPI();
    }

    return <div>
        <input type="text"
            placeholder="Search user..."
            value={user}
            onChange={handleChange}
        />
        <button onClick={handleOnClick}>Seach</button>
    </div>
}
export default SearchUser