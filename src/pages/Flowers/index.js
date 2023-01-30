import {Button,Box } from '@mui/material';
import gerberas from'../../assests/gerberas.jpg'
import lightrose from '../../assests/lightrose.jpg'
import mixed from '../../assests/mixed.jpg'
import mixrose from '../../assests/mixrose.jpg'
import pinkrose from '../../assests/pinkrose.jpg'
import Pinkvilla from '../../assests/Pinkvilla.jpg'
import redblossom from '../../assests/redblossom.jpg'
import rose from '../../assests/rose.jpg'
import roses from '../../assests/roses.jpg'
import whiteroses from '../../assests/whiteroses.jpg'
import yellow from '../../assests/yellow.jpg'
import Grid from '@mui/material/Grid';
import Itemcard from '../../components/Itemcard';
import CakeView from '../../features/cake/CakeView';
import Ibutton from '../../components/Ibutton';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Idialog from '../../components/Idialog';
import Iapprate from '../../components/Iapprate';
const flowersList=[
  {
    title:"Gerberas",
    cardMedia:gerberas,
    actualPrice:100,
    discountedPrice:75,
    rating:4.2,
    sellingStatus:'Best Seller',
    ed:"Today",
    review:"must try"
  },
  {
    title:"Light Rose",
    cardMedia:lightrose,
    actualPrice:145,
    discountedPrice:125,
    rating:3,
    sellingStatus:'Premium',
    ed:"Tommorrow"
    
  },
  {
    title:"Mixed",
    cardMedia:mixed,
    actualPrice:145,
    discountedPrice:125,
    rating:4.2,
    sellingStatus:'Best Seller',
    ed:'Today'
    
  },
  {
    title:"Mix Rose",
    cardMedia:mixrose,
    actualPrice:145,
    discountedPrice:125,
    rating:4.2,
    sellingStatus:'Best Seller',
    ed:'Today'
    
  },

   
  {
    title:"Pink Rose",
    cardMedia:pinkrose,
    actualPrice:145,
    discountedPrice:125,
    rating:4.2,
    sellingStatus:'Best Seller',
    ed:'Tommorrow'
  },
  {
    title:"Pink Villa",
    cardMedia:Pinkvilla,
    actualPrice:145,
    discountedPrice:125,
    rating:4.2,
    sellingStatus:'Best Seller',
    ed:'Today'
  },
  {
    title:"Red Blossom",
    cardMedia:redblossom,
    actualPrice:145,
    discountedPrice:125,
    rating:4.2,
    sellingStatus:'Best Seller',
    ed:'Tommorrow'
  },
  {
    title:"Rose",
    cardMedia:rose,
    actualPrice:145,
    discountedPrice:125,
    rating:4.2,
    sellingStatus:'Best Seller',
    ed:'Tommorrow'
  },
  {
    title:"Roses",
    cardMedia:roses,
    actualPrice:145,
    discountedPrice:125,
    rating:4.2,
    sellingStatus:'Best Seller',
    ed:'Today'
  },
  {
    title:"White Roses",
    cardMedia:whiteroses,
    actualPrice:145,
    discountedPrice:125,
    rating:4.2,
    sellingStatus:'New Arrival',
    ed:'Today'
  },
  {
    title:"Yellow",
    cardMedia:yellow,
    actualPrice:145,
    discountedPrice:125,
    rating:4.2,
    sellingStatus:'New Arrival',
    ed:'Today'
  }

]
 let ordername="flower"
export default function Cake(){
 
    return(
      <>
       <Box sx={{margin:'25px'}}>
        <Grid container spacing={{xs:2,md:3}} columns={{xs:4,sm:8,md:12}} style={{backgroundColor:'pink'}}>
          {
            flowersList.map((item)=>{
              return(
                < Grid item xs={2} sm={4} md={3} display='flex' justifyContent='center'>
                <Itemcard title={item.title} subheader={item.subheader} cardMedia={item.cardMedia}
                actualPrice={item.actualPrice} discountedPrice={item.discountedPrice}  
                sellingStatus={item.sellingStatus} ed={item.ed} rating={item.rating} review={item.review}
                ordername={ordername}
                cakeimg={<CakeView/>}
                
                />
                </Grid>
               
              )
              
            })
          }
           
        </Grid>
      </Box>
       <h1>NO LIMIT!</h1>
       <h3 style={{color:'red'}}>To Enjoy More Wait and Watch</h3>
       <h4 style={{color:'blue'}}>Did you find what you were looking for?</h4>
       <Ibutton text='Yes'/>
           <Ibutton text='No'/>
           <Box style={{backgroundColor:'red'}}>
            <h2>Connect with Us</h2>
            <FacebookIcon/>
            <YouTubeIcon/>
            <InstagramIcon/>
            <h4>About Us </h4>
            <h4>Careers</h4>
            <h4>Contact Us</h4>
            <Idialog text1='Rate Us' text2='your Experience' review={<Iapprate/>}/>
             
            
           </Box>
       </>
    )
}


