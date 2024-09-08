import { useState } from 'react'
import './App.css'
import { AddUser } from './components/AddUser'
import { UserList } from './components/UserList'
import { InputUser, IUser } from './types'
import { UserContext } from './context'

function App() {

  const [users, setUsers] = useState<IUser[]>([
    {id: 101 ,name: "Anna", age: 23, salary: 200000},
    {id: 102 ,name: "Robert", age: 25, salary: 270000,isMarried: true},
    {id: 103 ,name: "Ani", age: 28, salary: 190000, isMarried: false},
    {id: 104 ,name: "Arman", age: 19, salary: 215000}

  ]);

  const removeUser = (id:number):void => {
       setUsers(users.filter(user => user.id != id));

  }

  const handleAdd = (user:InputUser) => {
    setUsers([...users,{...user, id:Date.now()}]);
  }
  
  return (
    <>
    <UserContext.Provider value={{users, removeUser, handleAdd}}>
        <AddUser/>
        <UserList/>
    </UserContext.Provider>
      
    </>
  )
}

export default App
