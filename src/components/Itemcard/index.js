import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import LocalShippingIcon from "@mui/icons-material/LocalShippingOutlined";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "../../App.css";
import Irating from "../Irating";
import Idialog from "../Idialog";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Itemcard(props) {
  let title = props.title;
  let cardMedia = props.cardMedia;
  let actualPrice = props.actualPrice;
  let discountedPrice = props.discountedPrice;
  let sellingStatus = props.sellingStatus;
  let discount = actualPrice - discountedPrice;
  let dp = Math.floor((discount / actualPrice) * 100) + "% off";
  let ed = props.ed;
  let orderplaced = props.order;
  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = useState();
  const [isShown, setIsShown] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  const handleClick1 = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  let [qty, setQty] = useState(1);
  let dispatch = useDispatch();

  let params = {
    title: title,
    actualPrice: actualPrice,
    discountedPrice: discountedPrice,
    qty: parseInt(qty),
  };
  return (
    <>
      <Card
        sx={{ maxWidth: 360 }}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        style={{ backgroundColor: "#fafcfc" }}
      >
        <CardMedia>
          <Box style={{ position: "relative" }}>
            <CardMedia
              style={{ height: "250px", paddingTop: "2%" }}
              component="img"
              image={cardMedia}
            />
            <Box
              style={{
                position: "absolute",
                alignItems: "flex-end",
                color: "white",
                top: 10,
                left: "85%",
                transform: "translateX(-50%)",
              }}
            >
              <Stack spacing={1}>
                <Chip label={sellingStatus} color="success" />
              </Stack>
              <Box
                style={{
                  position: "fixed",
                  alignItems: "flex-end",
                  color: "white",
                  bottom: -200,
                  right: "172%",
                  transform: "translateX(-50%)",
                }}
              >
                <Stack spacing={1}>
                  <Chip label={dp} color="primary" />
                </Stack>
              </Box>
            </Box>
          </Box>
          <Typography style={{ position: "absolute" }}>{title}</Typography>
          <CardContent>
            <CardActions style={{ position: "absolute" }}>
              <Typography variant="h6" color="black">
                Rs{discountedPrice}
              </Typography>
              <Typography
                variant=""
                color="black"
                style={{ textDecorationLine: "line-through" }}
              >
                Rs{actualPrice}
              </Typography>
            </CardActions>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <LocalShippingIcon />
              Earlier Deliver:{ed}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="share" color="white">
              <ShareIcon />
            </IconButton>
            <TextField
              sx={{ width: "50px" }}
              style={{ backgroundColor: "white" }}
              size="small"
              id="outlined-basic"
              variant="outlined"
              defaultValue={1}
              onChange={(e) => setQty(e.currentTarget.value)}
            />
            <IconButton
              aria-label="cart "
              sx={{ color: "blue" }}
              onClick={() => {
                handleClick1();
                dispatch(orderplaced(params));
              }}
            >
              <Avatar src="https://cdn.pixabay.com/photo/2016/10/10/14/46/icon-1728552__480.jpg" />
            </IconButton>
          </CardActions>
          {isShown && (
            <CardActions>
              <Irating />
              <IconButton
                aria-label="add to favorites"
                onClick={handleClick}
                style={{ color: active ? "red" : "black" }}
              >
                <FavoriteIcon />
              </IconButton>
              <Idialog text1="Reviews" text2="review" />
            </CardActions>
          )}
        </CardMedia>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {qty} Items are added to cart!!
          </Alert>
        </Snackbar>
      </Card>
    </>
  );
}
