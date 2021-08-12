import { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((result) => result.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  const listOfUsers = users.length
    ? users.map((user) => {
        return (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address.city}</td>
          </tr>
        );
      })
    : 'No users found';

  const handleFilterTable = (searchTerm) => {
    const updatedTable = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setUsers(updatedTable);
  };

  return (
    <>
      <SearchForm onHandleFilterTable={handleFilterTable} />
      <table className='users-table'>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
          </tr>
          {listOfUsers}
        </tbody>
      </table>
    </>
  );
};

export default App;
