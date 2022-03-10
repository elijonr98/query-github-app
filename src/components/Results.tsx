const Results = ({ filteredRepos }: any) => {

return <>
        {filteredRepos?.map((item: any, index:number) => {
            return <span key={index}>{item.name}<br /></span>
        })}
    </>
}

export default Results
