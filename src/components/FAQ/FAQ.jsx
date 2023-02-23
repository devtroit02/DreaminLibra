
import React from 'react';
import { Grid } from '@material-ui/core';
import Gallery from 'react-grid-gallery';


import makeStyles from './styles';




const FAQ = ({ }) => {

    const classes = makeStyles();

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: '#5F6C9E' ,
                backgroundColor: '#5F6C9E ',
                height: 3,
                

            }}
        />
    );


    




  return (
     
    <>
    
<Grid spacing ={12} > 


<h1> Hi </h1>
<h1> Frequently Asked Questions</h1>
<h3>
<div>
<ColoredLine/>
(Q) Do I need to give you credit when posting DreaminLibran artwork online?
</div>
<div>
(A)It is always appreciated, but not necessary. You are the owner of the artwork! However, be aware that the artwork you purchase may be used to advertise DreaminLibran on social media. You can opt out of this when making your order.</div>
<ColoredLine/>
<div>
(Q) What happens after I place my order?
</div>
<div>
(A) First, we celebrate! Woooohooooo! But here’s what you can expect:
<ol>
<li> You’ll immediately receive an automated email confirming your purchase. Do not reply to this email.</li>
<li> Next, you will receive another email with the link to a Google Form where you can submit photos and information about what you want included in your order. </li>
<li> The final product will be delivered to you by email as well. </li> </ol>
If you do not receive both the automated and personal confirmation email within 24 hours, or would like to make changes to your order, contact me at dreaminlibran@gmail.com ASAP.</div>
<ColoredLine/>
<div>
(Q)How long will my order take?
</div>
<div>
(A)On average, you can expect your order to be completed within 2 weeks (per image). Monochromatic portraits, outline style portraits, and logos are generally completed within 1 week. I will contact you with updates on your order throughout the process, so you will have a clear idea of when to expect your final product.
</div>
<ColoredLine/>
<div>
(Q)What file format will my artwork be?
</div>
<div>
(A)Portraits can be delivered as a JPEG, PNG, or TIFF file. PNG and TIFF are best for printing.</div>
<ColoredLine/>
<div>
(Q)I want to add another person/character or background details to my portrait. How do I order that?
</div>
<div>
(A)The prices on this web page reflect the base price of 1 character with a solid color background. Your up-front purchase acts as a deposit on your order. Additional characters (people or pets) are $10 each, and background design is $5. You can add these options on the Google Form you will receive by email. Payment for any add-ons is due upon the completion of your order.</div>
<ColoredLine/>
<div>
(Q)I want to change something about my product. Do you do revisions?
</div>
<div>
(A)Yes - with exceptions. Your satisfaction is my #1 priority - and beauty is in the eye of the beholder, so it’s important that we collaborate to get it right. Revision rounds are anticipated and built into the logo design process. For portraits, I often send progress pictures via email so that we can catch any necessary changes earlier in the process. Minor changes to details of the artwork are accepted; however, I will not accept revisions that essentially require re-starting the commission, such as using a different reference photo or changing the color of a monochromatic portrait. </div>
<ColoredLine/>
<div>
(Q)I want to buy something that’s not listed. How do I do that?
</div>
<div>
(A)I am currently open for commissions of all kinds. Contact me at dreaminlibran@gmail.com - I would love to hear from you!</div>
<ColoredLine/>
<div>
(Q)I want a physical copy of my artwork. Will you print my artwork?
</div>
<div>
(A)Printing and shipping are available for an additional fee - just contact me by email to set it up! However, I highly recommend printing the art yourself, as it is usually cheaper & quicker. You can order online and print at CVS and Walgreens or use an online platform such as Shutterfly. Since this art belongs to you, you can make as many copies as you want. You can also print the image on other items - greeting cards, t-shirts, etc.
</div>
<ColoredLine/>
<div>
(Q)I want to cancel my order. Do you give refunds?
</div>
<div>
(A)Decisions on refunds are made on a case-by-case basis. For orders that have not been started, full refunds are available. Partial refunds are available for completed or in-progress orders, calculated based on the amount of time and labor that has already gone into the product.
</div>
<ColoredLine/>
 </h3>
 </Grid>
 

</>

  
    )}
    
export default FAQ;




    

