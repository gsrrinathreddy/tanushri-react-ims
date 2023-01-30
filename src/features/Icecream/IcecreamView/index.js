import {useDispatch} from 'react-redux';
import {ordered,restock} from '../IcecreamSlice';
import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from "react-redux";
import IcecreamIcon from '@mui/icons-material/Icecream';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import * as React from 'react';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
export default function IcecreamView(){
  const [open, setOpen] = React.useState(false);

  
    const handleClick = () => {
     dispatch(ordered(1))
     setOpen(true);
   };
 
   const handleClose = (event, reason) => {
     if (reason === 'clickaway') {
       return;
     }
 
     setOpen(false);
   };
  let noOfIcecreams=useSelector((state)=>state.icecream.noOfIcecreams);
  console.log('no of Icecreams',noOfIcecreams);
  let order=1;
const dispatch=useDispatch();
return(
    <>
    <h3>Number of Icecreams : {(noOfIcecreams<order)?'out of stock':noOfIcecreams}</h3>
    
    < IcecreamIcon
       onClick={handleClick}>
        order icecream
    </IcecreamIcon>

    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          your order is successful
        </Alert>
      </Snackbar>
      
    <IcecreamIcon
       onClick={()=>{
        dispatch(restock(2))
      }}>
        restock icecream
    </IcecreamIcon>
    </>
)
}