import { ChangeEvent, FC, useState } from "react";
import { useEffect } from "react";


interface Props {
    setFilteredRepos: (val: string) => void;
    repos: any;
}


export const SearchBar: FC<Props> = ({ setFilteredRepos, repos }) => {
    const [searchInput, setSearchInput] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
    }

    useEffect(() => {
        const filteredRepos = repos.filter(function (currentElement: {name:string}) {
            const name = currentElement.name.toLowerCase();
            return name.includes(searchInput.toLowerCase())
        });
        setFilteredRepos(filteredRepos)
    }, [searchInput])

    return <div className="flex items-start">
        <h1 className='mr-2'>Git repositories</h1>
        <input type="text"
            placeholder="search..."
            value={searchInput}
            onChange={handleChange} />
    </div>

}

export default SearchBar