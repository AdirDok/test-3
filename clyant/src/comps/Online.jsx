import React, { useState } from 'react';
import { useEffect } from 'react';
import Server_card from './Server_card';

export default function Online({ update, setUpdate }) {

  const [onlineArr, setOnlineArr] = useState([]);
  const [updateOnline, setUpdateOnline] = useState(false)



  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:9001/serverss/1`)
      const data = await res.json()
      // console.log(data);
      setOnlineArr(data)
    })()
  }, [updateOnline]);

  return <div>
    {
      onlineArr.map((server, i) => {
        return <Server_card key={i * 3} server={server} setUpdateOnline={setUpdateOnline} />
      })
    }

  </div>;
}
