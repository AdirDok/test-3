import React, { useEffect, useState } from 'react';
import Server_card from './Server_card';

export default function All({ update, setUpdate }) {

  const [allArr, setAllArr] = useState([]);

  useEffect(() => {

    (async () => {
      const res = await fetch(`http://localhost:9001/serverss`)
      const data = await res.json()
      // console.log(data, "hi im from data");
      setAllArr(data)

    })()

  }, [update]);



  return <div>

    {
      allArr.map((server, i) => {
        return <Server_card key={i} server={server} setUpdate={setUpdate} />
      })
    }


  </div>;
}
