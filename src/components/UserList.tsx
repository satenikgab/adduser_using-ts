import { useContext } from "react"
import { UserContext } from "../context"

export const UserList = () => {

    const context = useContext(UserContext);
    if(!context){
        throw new Error("Error");
    }

    const {users, removeUser} = context;
    return <>
     <table className="table">
     <thead>
                <tr>
                    <th>name</th>
                    <th>age</th>
                    <th>salary</th>
                    <th>isMarried</th>
                    <th>actions</th>
                    
                </tr>
            </thead>
            <tbody>
            {
            users.map(user => <tr key={user.id}>
           <td>{user.name}</td>
           <td>{user.age}</td>
           <td>{user.salary}</td>
           <td>{user.isMarried == true ?"married" :"not married"}</td>
           <td><button className="button-delete" onClick={() =>removeUser(user.id)}>x</button></td>
         

        </tr>)
      }
            </tbody>
     
    </table>
    </>
}