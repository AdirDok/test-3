import React from 'react';
import Switch from '@mui/material/Switch';

export default function Server_card({ server, setUpdateOfline, setUpdateOnline, setUpdate }) {
  let ServsrStatus = ''
  const { status } = server

  const updateServer = async (e) => {

    const res = await fetch(`http://localhost:9001/server/${server.id}`, {
      method: 'put'
    })

    const data = await res.json()
    console.log(data)



    if (setUpdateOfline) {
      setUpdateOfline(prev => !prev)
      return

    } else if (setUpdateOnline) {
      setUpdateOnline(prev => !prev)
      return

    } else {
      setUpdate(prev => !prev)
    }

  }

  status ? ServsrStatus = 'ofline' : ServsrStatus = 'online'


  return (

    <div className='Server_card' >
      <h2>  {server.server_name},  IP: {server.ip} </h2>
      <h3> host :{server.host}</h3>
      <div >
        <p>{ServsrStatus}</p>
        <Switch onClick={(e) => updateServer(e)} checked={!!status} />
      </div>
    </div>
  )
}
