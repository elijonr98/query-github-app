import SearchBar from './components/SearchBar'
import PersonalPanel from './components/PersonalPanel';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Results from './components/Results';
import Pagination from './components/Pagination';

function App() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);


  const [repos, setRepos] = useState([])
  const [personalInfo, setPersonalInfo] = useState({})
  const [filteredRepos, setFilteredRepos] = useState([])

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const [user, setUser] = useState('rengil')
 
 
  async function fetchMyAPI() {
    const resposResult: any = await axios(`https://api.github.com/users/${user}/repos`)
    const personalInfoResult: any = await axios(`https://api.github.com/users/${user}`)
    setRepos(resposResult.data)
    setFilteredRepos(resposResult.data)
    setPersonalInfo(personalInfoResult.data)
    setStatus("resolved");
  }

  useEffect(() => {
    try {
      fetchMyAPI()
    } catch {
      setStatus("rejected");
      setError(error);
    }
  }, [])

  if (status === "idle" || status === "pending") {
    return <div className='flex items-center justify-center h-screen'>Loading...</div>;
  }

  if (status === "rejected") {
    return <h1>There was an error {error} </h1>;
  }


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredRepos.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="bg-gray-50 flex flex-wrap xl:px-40 lg:py-20 min-h-screen min-w-min">
      <div className='md:w-1/3 px-10'>
        <PersonalPanel
          personalInfo={{ ...personalInfo }}
          setUser={setUser}
          user = {user}
          fetchMyAPI={fetchMyAPI}
        />
      </div>
      <div className='md:w-2/3  flex flex-col'>
        <SearchBar
          setFilteredRepos={setFilteredRepos}
          paginate={paginate}
          repos={repos}
        />
        <Results
          filteredRepos={currentPosts}
        />
        {filteredRepos.length > postsPerPage &&
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={filteredRepos.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        }
      </div>
    </div>
  );
}

export default App;
