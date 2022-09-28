import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Heder from './comps/Heder';
import Main from './comps/Main';

export default function App() {

  const [update, setUpdate] = useState(false);


  return (
    <BrowserRouter>
      <div>
        <Heder />
        <Main update={update} setUpdate={setUpdate} />
      </div>
    </BrowserRouter>
  )
}
