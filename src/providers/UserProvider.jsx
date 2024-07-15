/* eslint-disable react/prop-types */

import { UserContext } from "./hooks";
import { useState } from "react";
import { BASE_URL } from "./constant";

export default function UserProvider({children}) {
    const [users,setUsers]=useState([]);
    const [isLoading, setIsLoading]=useState(false);
    const [formData, setFormData] = useState({
        emailId: '',
        password: '',
        image: [],
      });
    
      function HandleOnBlur(e) {
        const { name, value } = e.target;   
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    
      function HandleOnDrop(acceptedFiles) {
        setFormData({
          ...formData,
          image: acceptedFiles,
        });
      }
    
      function HandleOnSubmit(e) {
        e.preventDefault();
        console.log("HANDLEONSUBMIT")
        console.log(formData);
      }

      async function fetchUsers(){
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/users`);
        const data= await res.json();
        setUsers(data);
        setIsLoading(false);
      }

      

  return (
    <UserContext.Provider value={{
        users,
        isLoading,
        fetchUsers,
        formData,
        setFormData,
        HandleOnBlur,
        HandleOnDrop,
        HandleOnSubmit,
    }}>
        {children}

    </UserContext.Provider>

);
}
