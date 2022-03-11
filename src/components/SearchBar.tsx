import { useState } from "react";
import { useEffect } from "react";

export const SearchBar = ({ setFilteredRepos, repos }: any) => {
    const [searchInput, setSearchInput] = useState('');
    
    const handleChange = (e: any) => {
        setSearchInput(e.target.value)
    }

    useEffect(() => {
        const filteredRepos = repos.filter(function (currentElement: any) {
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