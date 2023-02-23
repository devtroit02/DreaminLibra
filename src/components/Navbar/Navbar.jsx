import React from 'react';
import {AppBar, Toolbar, IconButton, Badge,Typography,} from '@material-ui/core';
import { ShoppingCart, Help, Dashboard} from '@material-ui/icons';
import {Link, useLocation} from 'react-router-dom';
import FAQ from '../FAQ/FAQ';
import logo from '../../assets/Logo.png';
import useStyles from './styles';




const Navbar = ({totalItems}) => {
    const classes =useStyles();
    const location = useLocation ();






    return (
        <>
        <AppBar position ="fixed" className={classes.appBar} color= "inherit">
            <Toolbar>
                
                <Typography component={Link}  to="/" variant ="h6" className={classes.title} >
                    <img src={logo} alt="Commerce.js" height="50px" className={classes.image}/>
                Dreamin Libran
                </Typography>
                <div className={classes.grow} />

               {location.pathname === '/' && (

               

                <div className ={classes.button}>


<IconButton component ={Link} to ="/FAQ"> 
                
                <Help />
                     
                     </IconButton>



                    <IconButton component={Link}  to="/cart" aria-label="Show cart items" color="inherit">
                    
                        <Badge badgeContent={totalItems} color="secondary">
                        
                        <ShoppingCart />
                        
                        
                        </Badge>

                       
                    </IconButton>
                </div>)}

         

                <IconButton component = {Link} to ="/Portfolio"> 
                
                <Dashboard />

                </IconButton>

            </Toolbar>
        </AppBar>
        </>
    );
};

export default Navbar