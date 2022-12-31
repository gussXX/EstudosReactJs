import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import KeyboardIcon from '@mui/icons-material/Keyboard';  
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function TopBar() {

    const [clickFocus, setClickFocus] = React.useState(false)

    return (
    <Container disableGutters="true" maxWidth="string">
        <Box sx={{ bgcolor: '#0f0f0f', height: '60px', width: '100%'}}>
            <Grid container direction="row" justifyContent="space-between" alignItems="center" style={{height: '100%'}}>

                <Grid item xs={2} xl={1} sm={3} md={2} lg={2}
                    paddingLeft="20px"   
                    container="true"
                    direction="row"
                    alignItems="center" 
                    sx={{backgroundColor: 'none'}}>
                    <IconButton sx={{color: '#fff'}}><MenuIcon/></IconButton>
                    <img src={require('./img/ytlogo.png')} height="20px"/>
                </Grid>

                <Grid item xs={3}>
                    <Paper
                        component="form"
                        sx={{ 
                            p: '6px 0px', 
                            display: 'flex',
                            alignItems: 'center', 
                            width: '100%',
                            backgroundColor: 'transparent',
                            borderRadius: 60,
                            height: 30,
                            border: '1px solid gray'
                        }}>
                            
                        {clickFocus == true && <IconButton type="button" sx={{ p: '10px', color: '#fff'}} aria-label="search"><SearchIcon/></IconButton>}
                        
                        <InputBase 
                        sx={{ ml: 1, flex: 1, color: '#fff'}} 
                            onFocus={ function(){setClickFocus(true)}}
                            onAbort={ function(){setClickFocus(false)}}
                            />
                        <IconButton color="primary" sx={{ p: '10px', color: '#fff',}} aria-label="directions"><KeyboardIcon /></IconButton>
                        
                        <Paper
                            sx={{
                                display: 'flex', 
                                width: '70px',
                                backgroundColor: '#222222',
                                borderRadius: '0px 50px 50px 0px',  
                                paddingLeft: '20px'
                            }}
                        >
                            <IconButton edge='end' sx={{color: '#fff'}}><SearchIcon/></IconButton>
                        </Paper>

                    </Paper>
                </Grid>

                <Grid item xs={2} xl={1} sm={3} md={2} lg={2}                   
                    paddingRight="40px"   
                    container
                    spacing={0}
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center" 
                    sx={{backgroundColor: 'none'}}>
                        <IconButton sx={{color: '#fff'}}><PhotoCameraFrontIcon/></IconButton>
                        <IconButton sx={{color: '#fff'}}><NotificationsNoneIcon/></IconButton>
                        <Avatar sx={{ bgcolor: deepOrange[500]}}>N</Avatar>
                </Grid>
            </Grid>
        </Box>
    </Container>
    );
  }

  export default  TopBar;

//   <TextField
//   size="small"
//   fullWidth="true" 
//   color='info' 
//   id="outlined-basic"  
//   variant="outlined"
//   InputProps={{
//       style: {
//           color: "#fff",
//           backgroundColor: '#000',
//           borderRadius: '60px',
//           borderColor: 'red',
//       }
//   }}
//   sx={{
//       '& label.Mui-focused': {color: 'gray',},
//       '& .MuiInput-underline:after': {borderBottomColor: 'gray',},
//       '& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'gray',},
//           '&:hover fieldset': {borderColor: 'gray',},
//           '&.Mui-focused fieldset': {borderColor: 'none',},
//       },
//     }}
//   /> 