import moment from "moment";
import { FC } from "react";
import Star from "./Star";

const RepositoryCard: FC<{item:{updated_at:string, name:string, description:string, language:string, license:{name:string}, forks:number, private:boolean}}>  = ({ item }) => {
    const date = new Date(item.updated_at);

    return <div className=" w-full h-auto my-2 p-4 flex shadow-lg rounded-xl bg-white">
        <div className="w-4/6">
            <div className="flex items-center">
                <span className="cursor-pointer text-lg text-blue-500 font-bold hover:text-blue-600 hover:underline"> {item.name}</span>
                <span className="bg-white font-bold text-gray-500 border ml-2 h-6 px-2 text-sm rounded-xl" >{!item.private && "Public"}</span>
            </div>
            <div className="text-sm mt-2">{item.description}</div>
            <div className="flex mt-2 text-sm">
                <div className="flex items-center ">
                    <div className="mr-1 w-2 h-2 bg-yellow-500 rounded-full" />{item.language}</div>
                <div className="ml-4">{moment(date).fromNow()}</div>
                <div className="ml-4">{item?.license?.name}</div>
                <div className="ml-4">{item.forks !== 0 && item.forks}</div>
            </div>
        </div>
        <div className="w-2/6 flex justify-end">
            <Star />
        </div>
    </div>
}

export default RepositoryCard
