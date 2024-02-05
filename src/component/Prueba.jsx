import React, { useContext } from 'react'
import { ApiContext } from '../context/Api'

export default function Prueba() {
    const { data } = useContext(ApiContext)
 
    return (
        <ul>
            {data && data.map(customer =>  
                <li key={customer.id}>
                    <span>{customer.name}</span><br /><br />
                    <span>{customer.date}</span><br /><br />
                </li>
             )}
 
        </ul>
    )
}
