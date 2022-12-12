import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CreateIcon from '@mui/icons-material/Create';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import CelebrationIcon from '@mui/icons-material/Celebration';
import RedeemIcon from '@mui/icons-material/Redeem';
import PrintIcon from '@mui/icons-material/Print';
import AddIcon from '@mui/icons-material/Add';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import './SideMenu.css'
import { UserAuth } from '../../context/AuthContext';
import NoteIcon from '@mui/icons-material/Note';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const SideMenu = (props) => {
  const { user } = UserAuth()

  return (
    <div id="mainDiv">
      <a href='/produse' style={{textDecoration: "none", color: 'black',  "&:hover": {backgroundColor: "#9df5f5"}}}>
        <div id='productsLabel'>Produse</div>
      </a>
       <Paper sx={{ width: 200, maxWidth: '100%' }}>
      <MenuList>
        <a href = '/produse/birotica' style={{textDecoration: "none", color: 'black'}}>
        <MenuItem >
          <ListItemIcon>
            <CreateIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Birotica</ListItemText>
        </MenuItem>
        </a>
        <a href = '/produse/papetarie' style={{textDecoration: "none", color: 'black'}}>
        <MenuItem >
          <ListItemIcon>
            <AttachFileIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Papetarie</ListItemText>
        </MenuItem>
        </a>
        <a href = '/produse/craft' style={{textDecoration: "none", color: 'black'}}>
        <MenuItem >
          <ListItemIcon>
            <ContentCutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Craft</ListItemText>
        </MenuItem>
        </a>
        <Divider />
        <a href = '/produse/party' style={{textDecoration: "none", color: 'black'}}>
        <MenuItem >
          <ListItemIcon>
            <CelebrationIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Accesorii petrecere</ListItemText>
        </MenuItem>
        </a>
        <a href = '/produse/jucarii' style={{textDecoration: "none", color: 'black'}}>
        <MenuItem >
          <ListItemIcon>
            <RedeemIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Jucarii</ListItemText>
        </MenuItem>
        </a>
        <a href = '/produse/it' style={{textDecoration: "none", color: 'black'}}>
        <MenuItem >
          <ListItemIcon>
            <LaptopMacIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>IT</ListItemText>
        </MenuItem>
        </a>
        <a href = '/produse/ghiozdane' style={{textDecoration: "none", color: 'black'}}>
        <MenuItem >
          <ListItemIcon>
            <ShoppingBagIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Genti & ghiozdane</ListItemText>
        </MenuItem>
        </a>
        <a href = '/produse/caiete' style={{textDecoration: "none", color: 'black'}}>
        <MenuItem >
          <ListItemIcon>
            <NoteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Caiete</ListItemText>
        </MenuItem>
        </a>
        <Divider />
        <a href = '/produse/reduceri' style={{textDecoration: "none", color: 'black'}}>
        <MenuItem >
          <ListItemIcon>
            <PriorityHighIcon fontSize="small" style={{color: 'red'}} />
          </ListItemIcon>
          <ListItemText style={{color: 'red', fontWeight: 'bold'}}>Promotii</ListItemText>
        </MenuItem>
        </a>
        <Divider />
        <a href = '/adaugaProdus' style={{textDecoration: "none", color: 'black'}}>
        { user && user.email === "colorintegra@yahoo.com" ?
        <MenuItem >
          <ListItemIcon>
            <AddIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText >Adauga un produs</ListItemText>
        </MenuItem> : null
        }   
        </a>
      </MenuList>
    </Paper>
    </div>
  )
}

export default SideMenu
