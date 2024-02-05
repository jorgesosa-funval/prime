import React, { useContext } from 'react'
import { ApiContext } from '../context/Api'

export default function Prueba2() {
    const { data2 } = useContext(ApiContext)
    return (
        <ul>
            {data2 && data2.map(datos =>

                <li key={datos.id}>
                    <span>{datos.country.name}</span><br />
                    <span>{datos.company}</span><br /><br />
                </li>


            )}

        </ul>
    )
}
