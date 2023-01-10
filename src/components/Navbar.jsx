import React from 'react'
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';


const Navbar = () => (
    <Stack  
     diretion="row" 
     alignItems="center" 
     p={2} 
     sx={{ postion:'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}
    >
        <Link to="/" style={{ display:  'flex', alignItems: 'center'}}>
            <img src={logo} height={45} />
        </Link>
        <SearchBar />
    </Stack>
  )


export default Navbar