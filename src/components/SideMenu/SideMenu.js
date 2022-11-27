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
import './SideMenu.css'
import { Link } from 'react-router-dom';

const SideMenu = (props) => {

  return (
    <div id="mainDiv">
        <div id='productsLabel'>Produse</div>
       <Paper sx={{ width: 200, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <CreateIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Birotica</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <AttachFileIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Papetarie</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentCutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Craft</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PrintIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cartuse</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <RedeemIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Jucarii</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <CelebrationIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Party</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem ><a href="/adaugaProdus" >
          <ListItemIcon>
            <AddIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText >Adauga un produs</ListItemText>
          </a>
        </MenuItem>
      </MenuList>
    </Paper>
    </div>
  )
}

export default SideMenu
