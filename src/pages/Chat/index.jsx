import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import { BiLink } from 'react-icons/bi';
import { GoArrowUp } from 'react-icons/go';

import { ChatCategoryButtom } from '../../components/ChatCategoryButtom';
import ChatHeader from '../../components/ChatHeader';
import { ChatMenuButtom } from '../../components/ChatMenuButtom';
import {
  Container,
  AsideContainer,
  ChatItem,
  ChatMenus,
  ChatMessage,
  TopChatMessage,
  BottomChatMessage,
} from './styles';

const drawerWidth = '15%';

export default function Chat() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const drawer = (
    <AsideContainer>
      <Toolbar />
      <Divider />
      <ChatItem>
        <span>Ontem</span>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            doloribus amet a.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            doloribus amet a.
          </p>
        </div>
      </ChatItem>
      <Divider />
      <ChatItem>
        <span>7 dias anteriores</span>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            doloribus amet a.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            doloribus amet a.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            doloribus amet a.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            doloribus amet a.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            doloribus amet a.
          </p>
        </div>
      </ChatItem>
    </AsideContainer>
  );
  return (
    <Container>
      <ChatHeader />

      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                mt: '80px',
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>

        <Box component="main" className="rightBox">
          <ChatMenus>
            <ChatMenuButtom />
            <ChatCategoryButtom />
          </ChatMenus>

          <ChatMessage>
            <TopChatMessage>
              <button type="button">
                <span>+</span>
                Mais acesso aos melhores...
              </button>

              <button type="button">
                <span>+</span>
                Mais acesso aos melhores...
              </button>

              <button type="button">
                <span>+</span>
                Mais acesso aos melhores...
              </button>

              <button type="button">
                <span>+</span>
                Mais acesso aos melhores...
              </button>
            </TopChatMessage>

            <BottomChatMessage>
              <div>
                <BiLink size={25} color="#000" />
                <input placeholder="Mensagem ChatGpt" />

                <button type="button">
                  <GoArrowUp size={25} color="#fff" />
                </button>
              </div>
            </BottomChatMessage>
          </ChatMessage>
        </Box>
      </Box>
    </Container>
  );
}
