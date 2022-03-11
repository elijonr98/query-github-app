import { useEffect, useState } from "react"

const SearchUser = ({user, setUser,fetchMyAPI}: any) => {   
    const handleChange = (e: any) => {
        setUser(e.target.value)
    }
    const handleOnClick = () =>{
        fetchMyAPI();
    }

   return <div>
    <input type="text"
        placeholder="Search user..."
        value={user}
        onChange={handleChange}
        />
        <button onClick={handleOnClick}>Seach</button>
</div>
}
export default SearchUser