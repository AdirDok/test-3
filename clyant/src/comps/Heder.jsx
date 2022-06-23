import React from 'react';
import { Link } from 'react-router-dom';
// ===================================

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function Heder() {



    return <div  >
        <AppBar position="static">
            <Toolbar>

                <Typography className='heder' variant="h6" component="div" sx={{ flexGrow: 1 }}>

                    <Link  className='linkim' to='/' >All  </Link>
                    <Link className='linkim' to='/online' >Online  </Link>
                    <Link className='linkim' to='/ofline' > Ofline </Link>


                </Typography>

            </Toolbar>
        </AppBar>


    </div>;
}
