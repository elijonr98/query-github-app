import { ChangeEvent, FC, useState } from "react";
import { useEffect } from "react";
import SortButton from "./SortButton";


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
        const filteredRepos = repos.filter(function (currentElement: { name: string, description: string }) {
            const name = currentElement?.name.toLowerCase();
            const description = currentElement.description?.toLowerCase();
            return name?.includes(searchInput.toLowerCase()) || description?.includes(searchInput.toLowerCase());
        });
        setFilteredRepos(filteredRepos)
        paginate(1);
    }, [searchInput])

    return <div className="flex flex-wrap items-center w-full justify-between mt-10 mb-4">
        <div className="lg:hidden w-full border-t border-2 border-gray-300 mb-2"></div>
        <div className="w-full mb-10 text-2xl font-bold text-gray-700 flex justify-center">Github Repositories</div>
        <input type="text"
            className="text-gray-500 h-8 px-2 rounded-md  w-full border-2 mx-1"
            placeholder="Find a repository..."
            value={searchInput}
            onChange={handleChange} />
        <div className="flex w-full mt-2">
            <SortButton name={"Type"}/>
            <SortButton name={"Language"} />
            <SortButton name={"Sort"} />
        </div>


    </div>

}

export default SearchBar