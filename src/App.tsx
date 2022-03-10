import SearchBar from './components/SearchBar'
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Results from './components/Results';

function App() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const [repos, setRepos] = useState([])
  const [filteredRepos, setFilteredRepos] = useState([])

  async function fetchMyAPI() {
    const result: any = await axios(`https://api.github.com/users/rengil/repos`)
    setRepos(result.data)
    setFilteredRepos(result.data)
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
    <div className="App">
      <h1>Git repositories</h1>

      <SearchBar
        setFilteredRepos={setFilteredRepos}
        repos={repos}
      />

      <Results
        filteredRepos={filteredRepos}
      />

    </div>
  );
}

export default App;
