import {useDispatch} from 'react-redux';
import {ordered,restock} from '../cakeSlice';
import { useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CakeIcon from '@mui/icons-material/Cake';
import * as React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function CakeView(){

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
  let noOfCakes=useSelector((state)=>state.cake.noOfCakes);
  console.log('no of cakes',noOfCakes);
  let order=1;
const dispatch=useDispatch();
return(
    <>
        {/* <h3>Number of Cakes : {(noOfCakes<order)?'out of stock':noOfCakes}</h3>   */}
      


     
      {/* <ShoppingCartIcon variant="outlined" onClick={handleClick}>
        order cakes
      </ShoppingCartIcon>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          your order is successful
        </Alert>
      </Snackbar> */}

    </>
)
}