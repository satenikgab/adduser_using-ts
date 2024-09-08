import { useContext, useState } from "react"
import { UserContext } from "../context";
import { InputUser } from "../types";

export const AddUser = () => {

  const [inputUser, setInputUser] = useState<InputUser>({
    name:"",
    age:0,
    salary:0,
    isMarried:false
  });

  const [error, setError] = useState<String>("");

  const context = useContext(UserContext);
  if(!context) {
    throw new Error("Error");
  }

  const {handleAdd} = context;

  

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!inputUser.name){
      return setError("Please fill all fields");
    }
    if(inputUser.age < 10) {
      return setError("age must be greater then 18");
    }

    if(inputUser.salary < 100000){
      return setError("salary must be greater then 10000");
    }
    handleAdd(inputUser);
    setInputUser({
      name:"",
      age:18,
      salary:0,
      isMarried:false
    });
    setError("");

    

  }

    return <>
      <h3>AddUser</h3>

      <form onSubmit={handleSubmit} className="form">
        {error && <p className="error">{error}</p>}
        <input className="input" type="text" placeholder="name" 
            value={inputUser.name} onChange={event => setInputUser({...inputUser, name:event.target.value})}
         />

        <input className="input" type="number" placeholder="age" 
             onChange={event => setInputUser({...inputUser, age:+event.target.value})}
         />
         <input className="input" type="number" placeholder="salary" 
              onChange={event => setInputUser({...inputUser, salary:+event.target.value})}
         />
         <label>isMarried</label>
         <select className=" select" name="isMarried"  value={inputUser.isMarried ? "yes":"no"} 
         onChange={event => setInputUser({...inputUser, isMarried:event.target.value === "yes"})}>
            <option value="yes">yes</option>
            <option value="no">no</option>
  
         </select>

         <button>save</button>
      </form>
    </>
}