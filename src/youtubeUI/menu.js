import * as React from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import HomeIcon from '@mui/icons-material/Home';
import RadioIcon from '@mui/icons-material/Radio';
import YouTubeIcon from '@mui/icons-material/YouTube';

import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import SlideshowIcon from '@mui/icons-material/Slideshow';
import HistoryIcon from '@mui/icons-material/History';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import PlaylistPlayRoundedIcon from '@mui/icons-material/PlaylistPlayRounded';

function Menu() {

const [open, setOpen] = React.useState(false);

const handleClick = () => {
    setOpen(!open);
};

  return (
    <Box
    sx={{
        '& > :not(style)': {
          m: 0,
          width: 250,
          backgroundColor: '#0f0f0f', //'#0f0f0f',
        },
      }}
    >
        <Paper
            elevation={0}
            square
            sx={{
                paddingLeft: '10px',
                height: 'calc(100vh - 60px)', //window.screen.height - window.innerWidth
                overflowY: 'auto',
                '&::-webkit-scrollbar': {
                    width: '10px'
                  },
                  '&::-webkit-scrollbar-track': {
                    boxShadow: 'inset 0 0 0px rgba(0,0,0,0)',
                    webkitBoxShadow: 'inset 0 0 0px rgba(0,0,0,0)',
                    backgroundColor: 'dark',
                    
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#808080',
                    borderRadius: '4px'
                  },
            }}
        >
            <nav aria-label="main mailbox folders">
                <List
                      sx={{
                        width: '100%',
                        maxWidth: 260,
                        overflow: 'auto',
                        '& ul': { padding: 0 },
                      }}
                >
                    <ListItem disablePadding>
                        <ListItemButton 
                        sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
                            '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
                        <ListItemIcon><HomeIcon sx={{color: '#fff'}}/></ListItemIcon>
                        <ListItemText primary="Inicio" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                    <ListItemButton 
                    sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
                            '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
                        <ListItemIcon><RadioIcon sx={{color: '#fff'}}/></ListItemIcon>
                        <ListItemText primary="Shorts"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                    <ListItemButton 
                    sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
                            '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
                        <ListItemIcon><YouTubeIcon sx={{color: '#fff'}}/></ListItemIcon>
                        <ListItemText primary="Inscrições"/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>

            <Divider light variant="middle" sx={{backgroundColor: '#272727'}}/>

            <nav aria-label="main mailbox folders">
                <List
                      sx={{
                        width: '100%',
                        maxWidth: 360,
                        overflow: 'auto',
                        '& ul': { padding: 0 },
                      }}
                >
                    <ListItem disablePadding>
                        <ListItemButton 
                        sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
                            '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
                        <ListItemIcon><VideoLibraryOutlinedIcon sx={{color: '#fff'}}/></ListItemIcon>
                        <ListItemText primary="Biblioteca" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                    <ListItemButton 
                    sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
                            '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
                        <ListItemIcon><HistoryIcon sx={{color: '#fff'}}/></ListItemIcon>
                        <ListItemText primary="Hisotórico"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                    <ListItemButton 
                    sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
                            '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
                        <ListItemIcon><SlideshowIcon sx={{color: '#fff'}}/></ListItemIcon>
                        <ListItemText primary="Seus videos"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                    <ListItemButton 
                    sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
                            '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
                        <ListItemIcon><MovieCreationOutlinedIcon sx={{color: '#fff'}}/></ListItemIcon>
                        <ListItemText primary="Seus filmes"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                    <ListItemButton 
                    sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
                            '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
                        <ListItemIcon><ScheduleOutlinedIcon sx={{color: '#fff'}}/></ListItemIcon>
                        <ListItemText primary="Assistir mais tarde"/>
                        </ListItemButton>
                    </ListItem>

                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton 
                            sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
                            '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
                                <ListItemIcon><PlaylistPlayRoundedIcon sx={{color: '#fff'}}/></ListItemIcon>
                                <ListItemText primary="Playlists do usuario" />
                            </ListItemButton>
                            <ListItemButton 
                            sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
                            '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
                                <ListItemIcon><PlaylistPlayRoundedIcon sx={{color: '#fff'}}/></ListItemIcon>
                                <ListItemText primary="Playlists do usuario" />
                            </ListItemButton>
                            <ListItemButton 
                            sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
                            '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
                                <ListItemIcon><PlaylistPlayRoundedIcon sx={{color: '#fff'}}/></ListItemIcon>
                                <ListItemText primary="Playlists do usuario" />
                            </ListItemButton>
                            <ListItemButton 
                            sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
                            '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
                                <ListItemIcon><PlaylistPlayRoundedIcon sx={{color: '#fff'}}/></ListItemIcon>
                                <ListItemText primary="Playlists do usuario" />
                            </ListItemButton>
                            <ListItemButton 
                            sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
                            '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
                                <ListItemIcon><PlaylistPlayRoundedIcon sx={{color: '#fff'}}/></ListItemIcon>
                                <ListItemText primary="Playlists do usuario" />
                            </ListItemButton>
                            <ListItemButton 
                            sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
                            '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
                                <ListItemIcon><PlaylistPlayRoundedIcon sx={{color: '#fff'}}/></ListItemIcon>
                                <ListItemText primary="Playlists do usuario" />
                            </ListItemButton>
                            <ListItemButton 
                            sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
                            '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
                                <ListItemIcon><PlaylistPlayRoundedIcon sx={{color: '#fff'}}/></ListItemIcon>
                                <ListItemText primary="Playlists do usuario" />
                            </ListItemButton>
                            <ListItemButton 
                            sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
                            '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
                                <ListItemIcon><PlaylistPlayRoundedIcon sx={{color: '#fff'}}/></ListItemIcon>
                                <ListItemText primary="Playlists do usuario" />
                            </ListItemButton>
                            <ListItemButton 
                            sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
                            '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
                                <ListItemIcon><PlaylistPlayRoundedIcon sx={{color: '#fff'}}/></ListItemIcon>
                                <ListItemText primary="Playlists do usuario" />
                            </ListItemButton>
                            <ListItemButton 
                            sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
                            '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
                                <ListItemIcon><PlaylistPlayRoundedIcon sx={{color: '#fff'}}/></ListItemIcon>
                                <ListItemText primary="Playlists do usuario" />
                            </ListItemButton>
                            <ListItemButton 
                            sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
                            '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
                                <ListItemIcon><PlaylistPlayRoundedIcon sx={{color: '#fff'}}/></ListItemIcon>
                                <ListItemText primary="Playlists do usuario" />
                            </ListItemButton>
                            <ListItemButton 
                            sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
                            '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
                                <ListItemIcon><PlaylistPlayRoundedIcon sx={{color: '#fff'}}/></ListItemIcon>
                                <ListItemText primary="Playlists do usuario" />
                            </ListItemButton>
                            <ListItemButton 
                            sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
                            '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
                                <ListItemIcon><PlaylistPlayRoundedIcon sx={{color: '#fff'}}/></ListItemIcon>
                                <ListItemText primary="Playlists do usuario" />
                            </ListItemButton>
                            <ListItemButton 
                            sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
                            '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
                                <ListItemIcon><PlaylistPlayRoundedIcon sx={{color: '#fff'}}/></ListItemIcon>
                                <ListItemText primary="Playlists do usuario" />
                            </ListItemButton>
                            <ListItemButton 
                            sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
                            '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
                                <ListItemIcon><PlaylistPlayRoundedIcon sx={{color: '#fff'}}/></ListItemIcon>
                                <ListItemText primary="Playlists do usuario" />
                            </ListItemButton>
                            <ListItemButton 
                            sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
                            '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
                                <ListItemIcon><PlaylistPlayRoundedIcon sx={{color: '#fff'}}/></ListItemIcon>
                                <ListItemText primary="Playlists do usuario" />
                            </ListItemButton>

                        </List>
                    </Collapse>

                    <ListItemButton onClick={handleClick}
                    sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
                    '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
                        <ListItemIcon><InboxIcon sx={{color: '#fff'}}/></ListItemIcon>
                        <ListItemText primary={open == true ? "Ver menos" : "Ver mais"} />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                </List>
            </nav>
            
        </Paper>
    </Box>
  );
}

export default Menu;

// sx={{
//     borderRadius: '10px',
//     backgroundColor: 'transparent',
//     color: '#fff',
//     '&:hover': {
//       backgroundColor: '#272727',
//       color: '#fff',}
// }}

{/* <nav aria-label="secondary mailbox folders">
<List>
<ListItem disablePadding>
<ListItemButton 
sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
        '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
    <ListItemText primary="Trash" />
    </ListItemButton>
</ListItem>

<ListItem disablePadding>
<ListItemButton 
sx={{borderRadius: '10px', backgroundColor: 'transparent',color: '#fff',
        '&:hover': {backgroundColor: '#272727',color: '#fff',}}}>
    <ListItemText primary="Spam" />
    </ListItemButton>
</ListItem>
</List>
</nav> */}