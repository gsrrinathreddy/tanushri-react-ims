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
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import '../../App.css';
import { Box } from '@mui/material';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function Icard(props) {
    let cakeimg=props.cakeimg;
    let icecreamimg=props.icecreamimg;
    let img1=props.img1;
    let title=props.title;
    let img2=props.img2;
    let cakes=props.cakes;
  const [expanded, setExpanded] = React.useState(false);
  const [isShown, setIsShown] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 ,marginLeft:'500px'}}
    onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)}
    
    >
      <CardHeader
        avatar={
          <Avatar src={img2}/>
            
          
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={img1}
        alt="Paella dish"
      />
      <CardContent>
        {cakeimg}
        {icecreamimg}
      </CardContent>
      <CardContent>
        {cakes}
      </CardContent>
      <Box>
  {isShown && (<CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>)}
  </Box>
    </Card>
   
);
}