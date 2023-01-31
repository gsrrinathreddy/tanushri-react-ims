import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import LocalShippingIcon from '@mui/icons-material/LocalShippingOutlined';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TextField from '@mui/material/TextField';
import {useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { ordered as cakeordered } from '../../features/cake/cakeSlice';
import { ordered as giftordered } from '../../features/Gifts/GiftSlice';
import { ordered as flowerordered } from '../../features/flowers/FlowerSlice';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';

import '../../App.css';
import Irating from '../Irating';
import Idialog from '../Idialog';


export default function Itemcard(props) {
    let title=props.title;
    let subheader=props.subheader;
    let cardMedia=props.cardMedia;
    let actualPrice=props.actualPrice;
    let discountedPrice=props.discountedPrice;
    let rating=props.rating;
    let sellingStatus=props.sellingStatus;
    let cakeimg=props.cakeimg;
    let ordername=props.ordername;
    let discount=actualPrice-discountedPrice;
    let dp=Math.floor((discount/actualPrice)*100)+"% off";
    let ed =props.ed;
   
  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = useState();
  const [isShown, setIsShown] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
 
  let [qty,setQty]=useState(1);
  let dispatch=useDispatch()


  let params={
    title:title,
    actualPrice:actualPrice,
    discountedPrice:discountedPrice,
    qty:parseInt(qty),
    
     }
  return (
    <>
    <Card sx={{ maxWidth: 360 }}
    onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)}
    style={{backgroundColor:'#fafcfc'}}
    >
      <CardMedia >
      < Box style={{ position: "relative" }}>
      <CardMedia style={{ height: "250px", paddingTop: "2%" }}   component="img" image={cardMedia}/> 
        <Box style={{position: "absolute",alignItems:'flex-end', color: "white",top: 10,left: "85%",
        transform: "translateX(-50%)",}}> 
       <Stack spacing={1} >
        <Chip label={sellingStatus}  color="success" />
        </Stack>
        <Box style={{position: "fixed",alignItems:'flex-end', color: "white",bottom:-200,right:"172%",
        transform: "translateX(-50%)",}}>
           <Stack spacing={1} >
        <Chip label={dp} color="primary" />
        </Stack>
        </Box>
      </Box> 
  </Box>
  <Typography style={{position:"absolute"}}>
     {title}
  </Typography>
  <CardContent>
  <CardActions style={{position:"absolute"}}  >
      <Typography variant="h6" color="black"  >
          Rs{discountedPrice}
      </Typography>
      <Typography variant="" color="black" style={{textDecorationLine:"line-through"}} >
          Rs{actualPrice} 
      </Typography>
  </CardActions>
  </CardContent>
  <CardContent>
    <Typography variant='body2' color='text.secondary'>
      <LocalShippingIcon/>Earlier Deliver:{ed}
    </Typography>
    </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share" color="white">
          <ShareIcon />
        </IconButton>
        <TextField sx={{width:'50px'}} style={{backgroundColor:'white'}} size="small" id="outlined-basic" variant="outlined" defaultValue={1} onChange={(e)=>setQty(e.currentTarget.value)}/>
          <IconButton aria-label="cart " sx={{color:'blue'}}  onClick={()=>{
            if(ordername=="cake"){
              dispatch(cakeordered(params))
            }
            else if(ordername=="gift"){
              dispatch(giftordered(params))
            }
            else if(ordername=="flower"){
              dispatch(flowerordered(params))
            }
          }}>
           <Avatar src="https://cdn.pixabay.com/photo/2016/10/10/14/46/icon-1728552__480.jpg" />
            </IconButton>
      </CardActions>
      {isShown &&(<CardActions>
       <Irating/>
      <IconButton aria-label="add to favorites"  
         onClick={handleClick}
         style={{color: active ? "red" : "black" }}
         >
           <FavoriteIcon/>  
        </IconButton>
        <Idialog text1='Reviews' text2='review'/>
      </CardActions>)}
      </CardMedia>
    </Card>
     
     </>
  );
}