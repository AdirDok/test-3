import React, { useState } from 'react';
import { useEffect } from 'react';
import Server_card from './Server_card';

export default function Ofline({ update, setUpdate }) {

  const [oflineArr, setOflineArr] = useState([]);

  useEffect(() => {

    (async () => {
      const res = await fetch(`http://localhost:9001/serverss/0`)
      const data = await res.json()
      // console.log(data, "hi im frome ofline");
      setOflineArr(data)

    })()


  }, [update]);




  return <div>

    

    {
      oflineArr.map((server, i) => {
        return <Server_card key={i*2} server={server} setUpdate={setUpdate} />
      })
    }


  </div>;
}
