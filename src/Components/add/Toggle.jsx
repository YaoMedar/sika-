import React, { useState } from 'react'
import "./style.scss"
import {Link} from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import {Box, Fab, Modal, Tooltip,styled,  ButtonGroup, Button} from '@mui/material'
import A from '../images/A.jpg';


import RestaurantIcon from '@mui/icons-material/Restaurant';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';

export const Toggle = () => {

  const StyleModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
  });

const [open,setOpen] = useState(false);

  return (
    <div className='toggle'>
       <Tooltip title="Add"
            onClick={e=>setOpen(true)}
            sx={{
              display:"flex",
              justifyContent:"centter",
              alignItems:"center",
              position:"fixed", 
              bottom:10    ,
              transition:"1s all ease",
              marginLeft:11,
          }} 
        >
            <Fab   size="small" aria-label="add" className='fabIcon'>
                <AddIcon color="primary" />
            </Fab>
       </Tooltip>
       <StyleModal
            open = {open}
            onClose={e=>setOpen(false)}
       >
       <Box bgcolor={"transparent"} color={"text.primary"} p={3} borderRadius={5}  width={350}>
      
          <ButtonGroup 
              fullWidth
              variant="contained" 
              aria-label="outlined primary button group"
            >
              <Button sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Link className='icons'><InterpreterModeIcon className='items'/>SMS</Link>
                <Link className='icons'><RestaurantIcon className='items'/>Food</Link>
                <Link className='icons'><LocationCityIcon className='items'/>Home</Link>
                <Link className='icons'><AddShoppingCartIcon className='items'/>Shop</Link>
                <Link className='icons'><AirportShuttleOutlinedIcon className='items'/>Travel</Link>
                <Link className='user'><img src={`${A}`} alt='' className='userImage'/>Profile</Link>
              </Button>
          
          </ButtonGroup>
          </Box>
       </StyleModal>
    </div>
  )
}
