import './App.css';
import AddUser from './components/AddUser/AddUser';
import UsersList from './components/AddUser/UsersList';
import React, {useState} from 'react';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (userName, userAge) => {
      setUsersList((prevUserList) => {
        return [...prevUserList, {name: userName, age: userAge, id: Math.random().toString()}]
      })
  }

  const deleteUserHandler = (userId) => {
    setUsersList((prevUsersList) => {
      const updateUsersList = prevUsersList.filter(user => user.id !== userId)
      return updateUsersList;
    })
  };
  
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} onDeleteUser = {deleteUserHandler}/>
    </div>
  );
}

export default App;
