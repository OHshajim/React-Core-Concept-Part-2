import { useEffect, useState } from "react";
import './user.css'


export default function Users() {
    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])


    return (
        <div className="box">
            <h2>Users : {users.length}</h2>
        </div>
    )
}
