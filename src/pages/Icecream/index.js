import IcecreamView from "../../features/Icecream/IcecreamView"
import { useSelector } from "react-redux";
import Icard from "../../components/Icard";
import Ibutton from "../../components/Ibutton";
export default function Icecream(){
  let i1='https://images.indianexpress.com/2021/07/ice-cream-pixabay-1200.jpg'
    return(
      <>
      <Icard
        title='ICECREAM STORE'
        cakeimg={<IcecreamView/>}img1={i1}/>

      <br/>
            
           
       </>
    )
}