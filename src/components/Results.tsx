import { FC } from "react"
import RepositoryCard from "./RepositoryCard"

interface Props {
    filteredRepos: any;
}

const Results: FC<Props> = ({ filteredRepos }) => {
    return <>
        {filteredRepos?.map((item: any, index: number) => {
            return <RepositoryCard item={item} key={index} />
        })}
    </>
}

export default Results
