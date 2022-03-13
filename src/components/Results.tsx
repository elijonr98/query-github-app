import { FC } from "react"
import RepositoryCard from "./RepositoryCard"

interface Props {
    filteredRepos: any;
}

interface item {
    updated_at: string,
    name: string,
    description: string,
    language: string,
    license: { name: string },
    forks: number,
    private: boolean
}

const Results: FC<Props> = ({ filteredRepos }) => {
    return <>
        {filteredRepos?.map((item: item, index: number) => {
            return <RepositoryCard item={item} key={index} />
        })}
    </>
}

export default Results
