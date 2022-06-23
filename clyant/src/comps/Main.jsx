import React from 'react';
import { Route, Routes } from 'react-router-dom';
import All from './All';
import Ofline from './Ofline';
import Online from './Online';
// ===============================




export default function Main({ update, setUpdate }) {


    return <div>
        <Routes>
            <Route path='/' element={<All update={update} setUpdate={setUpdate} />} />
            <Route path='/online' element={<Online update={update} setUpdate={setUpdate} />} />
            <Route path='/ofline' element={<Ofline update={update} setUpdate={setUpdate} />} />
        </Routes>
    </div>;
}
