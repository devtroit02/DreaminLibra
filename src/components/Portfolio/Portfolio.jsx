
import React from 'react';
import Gallery from 'react-grid-gallery';
import { Grid } from '@material-ui/core';



const Portfolio = ({  }) => {


  
const IMAGES =
[{
        src: "https://cdn.chec.io/merchants/35129/assets/nsgyqcDjzpUIHzIU%7CVingie3.png",
        thumbnail: "https://cdn.chec.io/merchants/35129/assets/nsgyqcDjzpUIHzIU%7CVingie3.png",
        thumbnailWidth: 250,
        thumbnailHeight: 250,
        isSelected: false,
        tags: [{value: "Facetime", title: "Facetime"}, {value: "Piexeled Digital Portrait", title: "Piexeled Digital Portrait"}],
        caption: "Facetime (dreaminlibran.com)"
},
{
        src: "https://cdn.chec.io/merchants/35129/assets/yyaTrMItRXvJvqck%7CVingie2.png",
        thumbnail: "https://cdn.chec.io/merchants/35129/assets/yyaTrMItRXvJvqck%7CVingie2.png",
        thumbnailWidth: 250,
        thumbnailHeight: 250,
        tags: [{value: "Long Hair", title: "Hair"}, {value: "Piexeled Digital Portrait", title: "Piexeled Digital Portrait"}],
        caption: "Long Hair (dreaminlibran.com)"
},
{
  src: "https://cdn.chec.io/merchants/35129/assets/g4rsVbVpF6cQ6EGb%7CVingie4.png",
  thumbnail: "https://cdn.chec.io/merchants/35129/assets/g4rsVbVpF6cQ6EGb%7CVingie4.png",
  thumbnailWidth: 250,
  thumbnailHeight: 250,
  tags: [{value: "The Future", title: "The Future"}, {value: "Piexeled Digital Portrait", title: "Piexeled Digital Portrait"}],
  caption: "The Future (dreaminlibran.com)"
},
{
  src: "https://cdn.chec.io/merchants/35129/assets/mGZsLrPgmGugTFGA%7CVingie.png",
  thumbnail: "https://cdn.chec.io/merchants/35129/assets/mGZsLrPgmGugTFGA%7CVingie.png",
  thumbnailWidth: 250,
  thumbnailHeight: 250,
  tags: [{value: "OVingie", title: "Vingie"}, {value: "Monochromatic Portrait", title: "Monochromatic Portrait"}],
  caption: "Vingie (dreaminlibran.com)"
},
{
  src: "https://cdn.chec.io/merchants/35129/assets/nSFUeUKjO2xfDmwK%7CDevin.png",
  thumbnail: "https://cdn.chec.io/merchants/35129/assets/nSFUeUKjO2xfDmwK%7CDevin.png",
  thumbnailWidth: 250,
  thumbnailHeight: 250,
  tags: [{value: "Devin", title: "Devin"}, {value: "Monochromatic Portrait", title: "Monochromatic Portrait"}],
  caption: "Devin (dreaminlibran.com)"
},
{
  src: "https://cdn.chec.io/merchants/35129/assets/Un57Ge0sbaNJhupZ%7CMarriage1.png",
  thumbnail: "https://cdn.chec.io/merchants/35129/assets/Un57Ge0sbaNJhupZ%7CMarriage1.png",
  thumbnailWidth: 250,
  thumbnailHeight: 250,
  tags: [{value: "Marriage", title: "Marriage"}, {value: "Digital Outline", title: "Digital Outline"}],
  caption: "Marriage (dreaminlibran.com)"
},
{
  src: "https://cdn.chec.io/merchants/35129/assets/vyBr8pXgW9SX8kL9%7CDigital%20Portrait.png",
  thumbnail: "https://cdn.chec.io/merchants/35129/assets/vyBr8pXgW9SX8kL9%7CDigital%20Portrait.png",
  thumbnailWidth: 250,
  thumbnailHeight: 250,
  tags: [{value: "Kash", title: "Kash"}, {value: "Digital Outline", title: "Digital Outline"}],
  caption: "Kash (dreaminlibran.com)"
},
{
  src: "https://cdn.chec.io/merchants/35129/assets/gzYlr0PxfLO1a7Ef%7CLogo.png",
  thumbnail: "https://cdn.chec.io/merchants/35129/assets/gzYlr0PxfLO1a7Ef%7CLogo.png",
  thumbnailWidth: 250,
  thumbnailHeight: 250,
  tags: [{value: "OversensitiveSunflower", title: "OversensitiveSunflower"}, {value: "Logo", title: "Logo"}],
  caption: "Oversensitive (dreaminlibran.com)"
},
{
  src: "https://cdn.chec.io/merchants/35129/assets/MzI43fiePfBgtjGL%7CLogo1.png",
  thumbnail: "https://cdn.chec.io/merchants/35129/assets/MzI43fiePfBgtjGL%7CLogo1.png",
  thumbnailWidth: 250,
  thumbnailHeight: 250,
  tags: [{value: "Dreamin", title: "Dreamin"}, {value: "Logo", title: "PLogo"}],
  caption: "Dreamin (dreaminlibran.com)"
},
]

return(
  <Grid container justify ="center" spacing ={12}>
<Grid xs={12} sm ={6} md={4} lg={3}>
  <div>
     
    <h1> Hi </h1>
    <h1> Check Out My Art Gallery!</h1>
        <Gallery images={IMAGES}/>
        </div>

</Grid>
</Grid>
);

}
export default Portfolio;