import { Button, Box } from "@mui/material";
import cake1 from "../../assests/cake1.jpg";
import cake2 from "../../assests/cake2.jpg";
import cake3 from "../../assests/cake3.jpg";
import cake4 from "../../assests/cake4.jpg";
import cake5 from "../../assests/cake5.jpg";
import cake6 from "../../assests/cake6.jpg";
import cake7 from "../../assests/cake7.jpg";
import cake9 from "../../assests/cake9.jpg";
import cake10 from "../../assests/cake10.jpg";
import cake11 from "../../assests/cake11.jpg";
import Grid from "@mui/material/Grid";
import Itemcard from "../../components/Itemcard";
import CakeView from "../../features/cake/CakeView";
import Ibutton from "../../components/Ibutton";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Idialog from "../../components/Idialog";
import Iapprate from "../../components/Iapprate";
import { ordered } from "../../features/cake/cakeSlice";
const cakeList = [
  {
    title: "Bakingo Cake",
    subheader: "super cake",
    cardMedia: cake1,
    actualPrice: 100,
    discountedPrice: 75,
    rating: 4.2,
    sellingStatus: "Best Seller",
    ed: "Today",
    review: "must try",
  },
  {
    title: "Cake Square",
    subheader: "made from heart",
    cardMedia: cake3,
    actualPrice: 145,
    discountedPrice: 125,
    rating: 3,
    sellingStatus: "Premium",
    ed: "Tommorrow",
  },
  {
    title: "Chocolate Cake",
    subheader: "Chocolate in cake",
    cardMedia: cake4,
    actualPrice: 145,
    discountedPrice: 125,
    rating: 4.2,
    sellingStatus: "Best Seller",
    ed: "Today",
  },
  {
    title: "Chocolate Funfettti",
    subheader: "Chocolate in cake",
    cardMedia: cake2,
    actualPrice: 145,
    discountedPrice: 125,
    rating: 4.2,
    sellingStatus: "Best Seller",
    ed: "Today",
  },

  {
    title: "Cocomelon Cake",
    subheader: "Chocolate in cake",
    cardMedia: cake5,
    actualPrice: 145,
    discountedPrice: 125,
    rating: 4.2,
    sellingStatus: "Best Seller",
    ed: "Tommorrow",
  },
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
    title: "Fondent Wedding Cake",
    subheader: "Chocolate in cake",
    cardMedia: cake7,
    actualPrice: 145,
    discountedPrice: 125,
    rating: 4.2,
    sellingStatus: "Best Seller",
    ed: "Tommorrow",
  },
  {
    title: "FunfettiCup Cake",
    subheader: "Chocolate in cake",
    cardMedia: cake9,
    actualPrice: 145,
    discountedPrice: 125,
    rating: 4.2,
    sellingStatus: "Best Seller",
    ed: "Tommorrow",
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
    title: "Panda Cake",
    subheader: "Chocolate in cake",
    cardMedia: cake11,
    actualPrice: 145,
    discountedPrice: 125,
    rating: 4.2,
    sellingStatus: "New Arrival",
    ed: "Today",
  },
];
let ordername = "cake";
export default function Cake() {
  return (
    <>
      <Box sx={{ margin: "25px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {cakeList.map((item) => {
            return (
              <Grid
                display="flex"
                justifyContent="center"
                xs={4}
                sm={4}
                md={3}
                pt={4}
              >
                <Itemcard
                  title={item.title}
                  subheader={item.subheader}
                  cardMedia={item.cardMedia}
                  actualPrice={item.actualPrice}
                  discountedPrice={item.discountedPrice}
                  sellingStatus={item.sellingStatus}
                  ed={item.ed}
                  rating={item.rating}
                  review={item.review}
                  ordername={ordername}
                  order={ordered}
                  cakeimg={<CakeView />}
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
      <Box style={{ backgroundColor: "red" }}>
        <h2>Connect with Us</h2>
        <FacebookIcon />
        <YouTubeIcon />
        <InstagramIcon />
        <h4>About Us </h4>
        <h4>Careers</h4>
        <h4>Contact Us</h4>
        <Idialog
          text1="Rate Us"
          text2="your Experience"
          review={<Iapprate />}
        />
      </Box>
    </>
  );
}
