import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';



const Products = ({ products, onAddToCart }) => {

    const classes =useStyles();
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: '#5F6C9E' ,
                backgroundColor: '#5F6C9E ',
                height: 3

            }}
        />
    );


    const data = [
        {
          image: "https://cdn.chec.io/merchants/35129/assets/nsgyqcDjzpUIHzIU%7CVingie3.png",
          caption: "Piexeled Digital Portrait"
        },
        {
          image: "https://cdn.chec.io/merchants/35129/assets/yyaTrMItRXvJvqck%7CVingie2.png",
          caption: "Piexeled Digital Portrait"
        },
        {
          image: "https://cdn.chec.io/merchants/35129/assets/g4rsVbVpF6cQ6EGb%7CVingie4.png",
          caption: "Piexeled Digital Portrait"
        },
        {
          image: "https://cdn.chec.io/merchants/35129/assets/mGZsLrPgmGugTFGA%7CVingie.png",
          caption: "Monochromatic Digital Portrait"
        },
        {
          image: "https://cdn.chec.io/merchants/35129/assets/nSFUeUKjO2xfDmwK%7CDevin.png",
          caption: "Monochromatic Digital Portrait"
        },
        {
          image: "https://cdn.chec.io/merchants/35129/assets/Un57Ge0sbaNJhupZ%7CMarriage1.png",
          caption: "Outline Style Digital Portrait"
        },
        {
          image: "https://cdn.chec.io/merchants/35129/assets/vyBr8pXgW9SX8kL9%7CDigital%20Portrait.png",
          caption: "Outline Style Digital Portrait"
        },
        {
          image: "https://cdn.chec.io/merchants/35129/assets/gzYlr0PxfLO1a7Ef%7CLogo.png",
          caption: "Logo"
        },
        {
          image: "https://cdn.chec.io/merchants/35129/assets/MzI43fiePfBgtjGL%7CLogo1.png",
          caption: "Logo"
        }
      ];

      
    return (




    <main className={classes.content}>
        <div className={classes.toolbar} />
    <Grid container justify ="center" spacing ={12}>
    {products.map((product) => (
        <Grid item key={product.id} xs={12} sm ={6} md={4} lg={3}>
        <Product product={product} onAddToCart={onAddToCart}/>
    </Grid>
    ))}
    </ Grid>
    </main>
   
    )}


  
export default Products;