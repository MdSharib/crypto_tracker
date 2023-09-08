import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function TemporaryDrawer() {
 const [open, setOpen] = useState(false);

  

  return (
    <div>
      
      
          <IconButton onClick={() => setOpen(true)}><MenuRoundedIcon className='link'/> </IconButton>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={() => setOpen(false)}
          >
            <div className='drawer-div'>
            <a href='/'><p className='link'>Home</p></a>
        <a href='/'><p className='link'>Compare</p></a>
        <a href='/'><p className='link'>Watchlist</p></a>
        <a href='/'><p className='link'>Dashboard</p></a>
            </div>
            
          </Drawer>
    
    </div>
  );
}
