import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Paper } from '@mui/material';

function AppMenuBar () {
    return(
        <Box sx={{           
            display: 'flex',
            justifyContent: 'Center',
            p: 0,
            m: 0,
            borderRadius: 10,
        }}>
            <AppBar position="static" elevation={0}>
                <Box sx={{           
                    display: 'flex',
                    flexGrow: 1,
                    justifyContent: 'center',
                    p: 0,
                    m: 0,
                    borderRadius: 0,
                }}> 
                    <Grid container columnSpacing={2}  sx={{height: '80px', backgroundColor: 'blue', alignItems: 'center', width:'80%'}}>
                        <Grid item xs={3} md={3}                         
                            container
                            direction="row"
                            alignItems="center"
                            sx={{backgroundColor: 'pink', }}>
                                <IconButton sx={{color: '#fff'}}><MenuIcon/></IconButton>
                                <img src={require('./img/ytlogo.png')} height="20px"/>
                        </Grid>
                        
                        <Grid item xs={6} md={6}><Paper square elevation={0}>xs=6 md=8</Paper></Grid>
                        
                        <Grid item xs={3} md={3}><Paper square elevation={0}>xs=6 md=8</Paper></Grid>
                    </Grid>
                </Box>
            </AppBar>
      </Box>
    );
}

export default AppMenuBar;


{/* <div style={{height: '64px', width: '64px', backgroundColor: 'red'}}>1</div>
<div style={{height: '64px', width: '64px', backgroundColor: 'red'}}>2</div>
<div style={{height: '64px', width: '64px', backgroundColor: 'red'}}>3</div>
<div style={{height: '64px', width: '64px', backgroundColor: 'red'}}>4</div> */}