import cake6 from "../../assests/cake6.jpg";
import cake10 from "../../assests/cake10.jpg";
import Pinkvilla from "../../assests/Pinkvilla.jpg";
import roses from "../../assests/roses.jpg";
import browniewithicecream from "../../assests/brownie-with-ice-cream.jpg";
import chocobar from "../../assests/chocobar.jpg";
import cashewcombo from "../../assests/cashewcombo.jpg";
import ceramicmug from "../../assests/ceramicmug.jpg";
import Ibutton from "../../components/Ibutton";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Idialog from "../../components/Idialog";
import Iapprate from "../../components/Iapprate";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Itemcard from "../../components/Itemcard";

import { ordered } from "../../features/Gifts/GiftSlice";
const List = [
  {
    title: "Butterscotch Cake",
    subheader: "Chocolate in cake",
    cardMedia: cake6,
    actualPrice: 145,
    discountedPrice: 125,
    rating: 4.2,
    sellingStatus: "Best Seller",
    ed: "Today",
  },
  {
    title: "Grape Berry Cake",
    subheader: "Chocolate in cake",
    cardMedia: cake10,
    actualPrice: 145,
    discountedPrice: 125,
    rating: 4.2,
    sellingStatus: "Best Seller",
    ed: "Today",
  },
  {
    title: "Pink Villa",
    cardMedia: Pinkvilla,
    actualPrice: 145,
    discountedPrice: 125,
    rating: 4.2,
    sellingStatus: "Best Seller",
    ed: "Today",
  },
  {
    title: "Roses",
    cardMedia: roses,
    actualPrice: 145,
    discountedPrice: 125,
    rating: 4.2,
    sellingStatus: "Best Seller",
    ed: "Today",
  },
  {
    title: "Brownie",
    cardMedia: browniewithicecream,
    actualPrice: 145,
    discountedPrice: 125,
    rating: 4.3,
    sellingStatus: "Premium",
    ed: "Today",
  },
  {
    title: "Chocobar",
    cardMedia: chocobar,
    actualPrice: 145,
    discountedPrice: 125,
    rating: 4.2,
    sellingStatus: "Best Seller",
    ed: "Tommorrow",
  },
  {
    title: "Cashew Combo",
    subheader: "bright shining",
    cardMedia: cashewcombo,
    actualPrice: 145,
    discountedPrice: 125,
    rating: 4.2,
    sellingStatus: "Best Seller",
    ed: "Tommorrow",
  },
  {
    title: "Ceramic Mug",
    subheader: "bright shining",
    cardMedia: ceramicmug,
    actualPrice: 145,
    discountedPrice: 125,
    rating: 4.2,
    sellingStatus: "Best Seller",
    ed: "Today",
  },
];
export default function Plants() {
  return (
    <>
      <Box sx={{ margin: "25px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {List.map((item) => {
            return (
              <Grid
                item
                xs={4}
                sm={4}
                md={3}
                display="flex"
                justifyContent="center"
              >
                <Itemcard
                  title={item.title}
                  subheader={item.subheader}
                  cardMedia={item.cardMedia}
                  actualPrice={item.actualPrice}
                  discountedPrice={item.discountedPrice}
                  sellingStatus={item.sellingStatus}
                  ed={item.ed}
                  order={ordered}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <h1>NO LIMIT!</h1>
      <h3 style={{ color: "red" }}>To Enjoy More Wait and Watch</h3>
      <h4 style={{ color: "blue" }}>Did you find what you were looking for?</h4>
      <Ibutton text="Yes" />
      <Ibutton text="No" />
      <p>
        <Idialog
          text1="Rate Us"
          text2="your Experience"
          review={<Iapprate />}
        />
      </p>
      <Box style={{ backgroundColor: "red" }}>
        <h2>Connect with Us</h2>
        <FacebookIcon />
        <YouTubeIcon />
        <InstagramIcon />
        <h4>About Us </h4>
        <h4>Careers</h4>
        <h4>Contact Us</h4>
      </Box>
    </>
  );
}
