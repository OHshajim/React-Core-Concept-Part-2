/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react'
import './user.css'
import OHMember from './OHMember';

export default function OH() {
    const [Oh, setOh] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setOh(data))
    }, []);
    // console.log(Oh.length);
    return (
        <div className='box'>
            <h2>OH Members : {Oh.length}</h2>
            {
                Oh.map(member=><OHMember member={member}></OHMember>)
            }
        </div>
    );
}