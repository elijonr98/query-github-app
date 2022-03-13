import { ChangeEvent, FC, useState } from "react";
import { useEffect } from "react";


interface Props {
    setFilteredRepos: (val: any) => void;
    paginate: (val: number) => void;
    repos: any;
}

export const SearchBar: FC<Props> = ({ setFilteredRepos, paginate, repos }) => {
    const [searchInput, setSearchInput] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
    }

    useEffect(() => {
        const filteredRepos = repos.filter(function (currentElement: { name: string }) {
            const name = currentElement.name.toLowerCase();
            return name.includes(searchInput.toLowerCase())
        });
        setFilteredRepos(filteredRepos)
        paginate(1);
    }, [searchInput])

    return <div className="flex items-start">
        <h1 className='w-1/6'>Find a repository</h1>
        <input type="text"
            className="w-5/6 mt-1 focus:ring-orange-600 focus:border-red-300 block  shadow-sm h-9 sm:text-sm border-gray-300 rounded-md px-2"
            placeholder="search..."
            value={searchInput}
            onChange={handleChange} />
    </div>

}

export default SearchBar