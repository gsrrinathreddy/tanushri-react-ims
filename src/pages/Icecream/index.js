import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Itemcard from '../../components/Itemcard';

import almond from '../../assests/almond.jpg'
import browniewithicecream from '../../assests/brownie-with-ice-cream.jpg'
import chocobar from '../../assests/chocobar.jpg'
import chocolateicecream from '../../assests/chocolate-icecream.jpg'
import chocolate from '../../assests/chocolate.jpg'
import cone from '../../assests/cone.jpg'
import SolidsReplacement from '../../assests/Solids-Replacement.jpg'
import SummerApricotbasil from '../../assests/Summer-Apricot-basil-icecream.jpg'
import truffles from '../../assests/truffles.jpg'
import whipped from '../../assests/whipped.jpg'
import Ibutton from '../../components/Ibutton';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Idialog from '../../components/Idialog';
import Iapprate from '../../components/Iapprate';
import { ordered } from '../../features/Icecream/IcecreamSlice';
const icecreamlist=[
  {
    title:"Almond",
    cardMedia:almond,
    actualPrice:100,
    discountedPrice:75,
    rating:4.2,
    sellingStatus:'Best Seller',
    ed:'Today'
   
  },
  {
    title:"Brownie",
    cardMedia:browniewithicecream,
    actualPrice:145,
    discountedPrice:125,
    rating:4.3,
    sellingStatus:'Premium',
    ed:'Today'
   
  },
  {
    title:"Chocobar",
    cardMedia:chocobar,
    actualPrice:145,
    discountedPrice:125,
    rating:4.2,
    sellingStatus:'Best Seller',
    ed:'Tommorrow'
   
  },
  {
    title:"Chocolate",
    cardMedia:chocolateicecream,
    actualPrice:145,
    discountedPrice:125,
    rating:4.2,
    sellingStatus:'Best Seller',
    ed:'Tommorrow'
  },
  {
    title:"Chocolate",
    cardMedia:chocolate,
    actualPrice:145,
    discountedPrice:125,
    rating:4.2,
    sellingStatus:'Best Seller',
    ed:'Today'
  },
  {
  title:"Cone",
  cardMedia:cone,
  actualPrice:145,
  discountedPrice:125,
  rating:4.2,
  sellingStatus:'Best Seller',
  ed:'Tommorrow'
  },
  {
    title:"Solids Replacement",
  cardMedia:SolidsReplacement,
  actualPrice:145,
  discountedPrice:125,
  rating:4.2,
  sellingStatus:'Best Seller',
  ed:'Tommorrow'
  },
  {
    title:"Summer Apricot basil",
  cardMedia:SummerApricotbasil,
  actualPrice:145,
  discountedPrice:125,
  rating:4.2,
  sellingStatus:'Best Seller',
  ed:'Tommorrow'
  },
  {
    title:"Truffles",
  cardMedia:truffles,
  actualPrice:145,
  discountedPrice:125,
  rating:4.2,
  sellingStatus:'Best Seller',
  ed:'Tommorrow'
  },
  {
    title:"whipped",
  cardMedia:whipped,
  actualPrice:145,
  discountedPrice:125,
  rating:4.2,
  sellingStatus:'Best Seller',
  ed:'Tommorrow'
  }
]
let ordername="icecream"
export default function Icecream(){
    return(
      <>
       <Box sx={{margin:'25px'}}>
        <Grid container spacing={{xs:2,md:2}} columns={{xs:4,sm:8,md:12}} >
         {
          icecreamlist.map((item)=>{
              return(
                < Grid item xs={4} sm={4} md={3} display='flex' justifyContent='center'>
               <Itemcard title={item.title} subheader={item.subheader} cardMedia={item.cardMedia}
                actualPrice={item.actualPrice} discountedPrice={item.discountedPrice}  
                sellingStatus={item.sellingStatus} ordername={ordername} ed={item.ed}
                 order={ordered}
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
           <p>
           <Idialog text1='Rate Us' text2='your Experience' review={<Iapprate/>}/> 
           </p>
           <Box style={{backgroundColor:'red'}}>
            <h2>Connect with Us</h2>
            <FacebookIcon/>
            <YouTubeIcon/>
            <InstagramIcon/>
            <h4>About Us </h4>
            <h4>Careers</h4>
            <h4>Contact Us</h4>
           </Box>
       </>
    )
}