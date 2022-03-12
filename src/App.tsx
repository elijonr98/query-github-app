import SearchBar from './components/SearchBar'
import PersonalPanel from './components/PersonalPanel';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Results from './components/Results';
import SearchUser from './components/SearchUser';


function App() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [user, setUser] = useState('rengil')

  const [repos, setRepos] = useState({})
  const [personalInfo, setPersonalInfo] = useState({})
  const [filteredRepos, setFilteredRepos] = useState({})

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
    return <h1>Loading ... </h1>;
  }

  if (status === "rejected") {
    return <h1>There was an error {error} </h1>;
  }

  return (
    <div className="bg-gray-100 flex px-40 py-20 min-h-screen">
      <div className='w-1/3 px-10'>
        <SearchUser
          user={user}
          setUser={setUser}
          fetchMyAPI={fetchMyAPI}
        />
        <PersonalPanel
          personalInfo={{...personalInfo}}
        />
      </div>
      <div className='w-2/3  flex flex-col'>
        <SearchBar
          setFilteredRepos={setFilteredRepos}
          repos={repos}
        />
        <Results
          filteredRepos={filteredRepos}
        />
      </div>
    </div>
  );
}

export default App;
