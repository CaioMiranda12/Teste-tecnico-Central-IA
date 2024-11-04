import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';

import CaioImage from '../../assets/me.jpg';
import { AsideContainer, ChatItem, Container } from './styles';

export default function ChatHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Container>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ display: { sm: 'none' }, mr: 2 }}
      >
        <IoMdMenu color="#000" />
      </IconButton>

      <h2>Central IA</h2>

      <div>
        <p>20 créditos</p>
        <img src={CaioImage} alt="foto do perfil" />
      </div>

      <Drawer
        anchor="left"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <Box
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <AsideContainer>
            <Toolbar />
            <Divider />
            <ChatItem>
              <span>Ontem</span>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur doloribus amet a.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur doloribus amet a.
                </p>
              </div>
            </ChatItem>
            <Divider />
            <ChatItem>
              <span>7 dias anteriores</span>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur doloribus amet a.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur doloribus amet a.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur doloribus amet a.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur doloribus amet a.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur doloribus amet a.
                </p>
              </div>
            </ChatItem>
          </AsideContainer>
        </Box>
      </Drawer>
    </Container>
  );
}
