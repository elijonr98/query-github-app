import RepositoryCard from "./RepositoryCard"

const Results = ({ filteredRepos }: any) => {

return <>
        {filteredRepos?.map((item: any, index:number) => {
            return <RepositoryCard item={item} key={index}/>
        })}
    </>
}

export default Results
