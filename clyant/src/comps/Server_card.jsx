import React from 'react';
import Switch from '@mui/material/Switch';

export default function Server_card({ server, setUpdate }) {
  let ServsrStatus = ''
  const { status } = server

  const updateServer = async (e) => {

    // console.log(e.target)


    const res = await fetch(`http://localhost:9001/server/${server.id}`, {
      method: 'put'
    })

    // if (res.status != 200) {
    //   e.target.preventDefault()
    // }

    const data = await res.json()
    // console.log(data);
    // console.log(res.status);

    setUpdate(up => !up)

  }

  status == 0 ? ServsrStatus = 'ofline' : ServsrStatus = 'online'



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
