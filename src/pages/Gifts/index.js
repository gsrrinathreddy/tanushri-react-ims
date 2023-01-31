import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Itemcard from '../../components/Itemcard';
import GiftView from '../../features/Gifts/GiftView';
import buddhaidol from '../../assests/buddha idol.jpg'
import bullockcart from '../../assests/bullockcart.jpg'
import crystaltree from '../../assests/crystaltree.jpg'
import cashewcombo from '../../assests/cashewcombo.jpg'
import ceramicmug from '../../assests/ceramicmug.jpg'
import couplelamp from '../../assests/couplelamp.jpg'
import Ibutton from '../../components/Ibutton';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Idialog from '../../components/Idialog';
import Iapprate from '../../components/Iapprate';
import { ordered } from '../../features/Gifts/GiftSlice';
const giftslist=[
  {
    title:"Buddha Idol",
    subheader:"brings peace",
    cardMedia:buddhaidol,
    actualPrice:100,
    discountedPrice:75,
    rating:4.2,
    sellingStatus:'Best Seller',
    ed:'Today'
   
  },
  {
    title:"Bullock Cart",
    subheader:"safe journey",
    cardMedia:bullockcart,
    actualPrice:145,
    discountedPrice:125,
    rating:4.3,
    sellingStatus:'Premium',
    ed:'Today'
   
  },
  {
    title:"Crystal Tree",
    subheader:"bright shining",
    cardMedia:crystaltree,
    actualPrice:145,
    discountedPrice:125,
    rating:4.2,
    sellingStatus:'Best Seller',
    ed:'Tommorrow'
   
  },
  {
    title:"Cashew Combo",
    subheader:"bright shining",
    cardMedia:cashewcombo,
    actualPrice:145,
    discountedPrice:125,
    rating:4.2,
    sellingStatus:'Best Seller',
    ed:'Tommorrow'
  },
  {
    title:"Ceramic Mug",
    subheader:"bright shining",
    cardMedia:ceramicmug,
    actualPrice:145,
    discountedPrice:125,
    rating:4.2,
    sellingStatus:'Best Seller',
    ed:'Today'
  },
  {
  title:"Couple Lamp",
  subheader:"bright shining",
  cardMedia:couplelamp,
  actualPrice:145,
  discountedPrice:125,
  rating:4.2,
  sellingStatus:'Best Seller',
  ed:'Tommorrow'
  }
]
let ordername="gift"
export default function Plants(){
    return(
      <>
       <Box sx={{margin:'25px'}}>
        <Grid container spacing={{xs:2,md:2}} columns={{xs:4,sm:8,md:12}} >
         {
          giftslist.map((item)=>{
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