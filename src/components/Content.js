import React, {useState, useEffect} from "react";
import axios from "axios";
import UserCard from "./UserCard.js";


export default function Content() {

    const [users, setUsers] = useState([]);

    useEffect(()=> {
        const getUsers = async () => {
            let res = await axios.get("https://randomuser.me/api/?results=15");
            let data = res.data;
            setUsers(data.results);
        }
        getUsers();
    },[]);

    return(
        <div>
            {users.map(u => (
                <UserCard name={u.name.first} gender={u.gender} email={u.email}/>
            ))}
        </div>
    )
}