import {useDispatch} from 'react-redux';
import {ordered,restock} from '../GiftSlice';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import * as React from 'react';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
export default function GiftView(){
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
    let noOfGifts=useSelector((state)=>state.gift.noOfGifts);
    console.log('no of gifts',noOfGifts);
  let order=1;
const dispatch=useDispatch();
return(
    <>
     <h3>Number of Gifts : {(noOfGifts<order)?'out of stock':noOfGifts}</h3>
    
    <LocalFloristIcon
      onClick={handleClick}
       
     >
        order gift
    </LocalFloristIcon>

    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          your order is successful
        </Alert>
      </Snackbar>

    <LocalFloristIcon
       onClick={()=>{
        dispatch(restock(2))
      }}>
        restock gift
    </LocalFloristIcon>
    </>
)
}