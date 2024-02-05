import React from 'react'

import 'primeicons/primeicons.css';
import Api from './context/Api';
import Prueba from './component/Prueba';
import Prueba2 from './component/Prueba2';


function App() {

  return (
    <>
      <Api>
        <Prueba />
        <Prueba2/>
      </Api>

    </>
  )
}

export default App
