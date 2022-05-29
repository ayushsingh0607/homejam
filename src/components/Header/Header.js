import React from 'react'
import images from '../image'
import './Header.css'
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import ShoppingBagSharpIcon from '@mui/icons-material/ShoppingBagSharp';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Header() {
  return (
    <div className='app__header'>
      <div className='app__header-home'>
        <img src={images.image52} alt='homejam' />
      </div>
      <div className='app__header-icons'> 
        <IconButton color="primary" aria-label="add to shopping cart" style={{color:'white'}}>
          <SearchOutlinedIcon />
        </IconButton>
        <Button variant="text" style={{color:'white',fontFamily: 'Open Sans',fontStyle: 'normal',fontWeight: 400,fontSize:'14px',textTransform:'none'}}>Search</Button>
        <Button variant="text" style={{color:'white',fontFamily: 'Open Sans',fontStyle: 'normal',fontWeight: 400,fontSize:'14px',textTransform:'none'}}>Help</Button>
        <Button variant="text" style={{color:'white',fontFamily: 'Open Sans',fontStyle: 'normal',fontWeight: 400,fontSize:'14px',textTransform:'none'}}>Account</Button>
        <IconButton color="primary" aria-label="add to shopping cart" style={{color:'white'}}>
          <ShoppingBagSharpIcon />
        </IconButton>
      </div>
    </div >
  )
}

export default Header