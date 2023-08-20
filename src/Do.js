import React, { useEffect, useState } from "react"

const App = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
   
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
        console.log(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <table border={"5px solid grey"}>
            <th>name</th>
            <th>username</th>
          {users.map(user => (
            <tr>
             key={user.id}{user.name}{user.username}
             {users.username}
            </tr>
          ))}
        </table>
      )}
    </div>
  );
}

export default App;