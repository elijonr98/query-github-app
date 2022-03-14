import { ChangeEvent, FC, useState } from "react";
import { useEffect } from "react";
import SortButton from "./SortButton";
import { ReactComponent as XIcon } from "../assets/.svg"


interface Props {
    setFilteredRepos: (val: any) => void;
    paginate: (val: number) => void;
    repos: any;
}

/**
 * Component that gives the option to filter all repositories and 
 * show only the ones that match the search input
 */
export const Filter: FC<Props> = ({ setFilteredRepos, paginate, repos }) => {
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

    return <div className="flex flex-wrap items-center w-full justify-between mb-4">
        <div className="lg:hidden w-full border-t border-2 border-gray-300 mb-2"></div>
        <div className="w-full mb-10 text-2xl font-bold text-gray-700 flex justify-center">Github Repositories</div>
        <input type="text"
            className="text-gray-500 h-8 px-2 rounded-md  w-full border-2 mx-1"
            placeholder="Find a repository..."
            value={searchInput}
            onChange={handleChange} />

        {searchInput !== "" &&
            <span onClick={() => setSearchInput("")}
                className="px-4 py-2 mt-2 mx-1 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                Clear filter
                <button className="bg-transparent hover focus:outline-none">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times"
                        className="w-3 ml-3" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 352 512">
                        <path fill="currentColor"
                            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
                        </path>
                    </svg>
                </button>
            </span>
        }
        <div className="flex w-full mt-2">
            <SortButton name={"Type"} />
            <SortButton name={"Language"} />
            <SortButton name={"Sort"} />
        </div>


    </div>

}

export default Filter